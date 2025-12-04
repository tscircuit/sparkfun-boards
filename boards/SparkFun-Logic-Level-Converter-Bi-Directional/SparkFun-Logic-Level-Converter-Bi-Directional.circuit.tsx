import { sel } from "@tscircuit/core"
import { BSS138 } from "./BSS138"

export default () => {
  const channelConfigs = [
    {
      name: "Q1",
      lvNet: sel.net().LV1,
      hvNet: sel.net().HV1,
      pcbX: -5.715,
      schX: -4.5,
    },
    {
      name: "Q2",
      lvNet: sel.net().LV2,
      hvNet: sel.net().HV2,
      pcbX: -1.905,
      schX: -1.5,
    },
    {
      name: "Q3",
      lvNet: sel.net().LV3,
      hvNet: sel.net().HV3,
      pcbX: 1.905,
      schX: 1.5,
    },
    {
      name: "Q4",
      lvNet: sel.net().LV4,
      hvNet: sel.net().HV4,
      pcbX: 5.715,
      schX: 4.5,
    },
  ] as const

  const channelResistorNames = channelConfigs.map((channel, idx) => ({
    hv: `R${idx * 2 + 2}`,
    lv: `R${idx * 2 + 3}`,
  }))

  return (
    <board width="15.24mm" height="12.70mm">
      {channelConfigs.map((channel) => (
        <BSS138
          key={channel.name}
          name={channel.name}
          pcbX={channel.pcbX}
          pcbY={0}
          schX={channel.schX}
          schY={0}
          connections={{
            pin1: sel.net().LV,
            pin2: channel.lvNet,
            pin3: channel.hvNet,
          }}
          pcbRotation={-90}
          schRotation={90}
        />
      ))}

      {channelConfigs.map((channel, idx) => (
        <resistor
          key={`${channel.name}-hv-res`}
          name={channelResistorNames[idx].hv}
          resistance="10k"
          footprint={"0603"}
          pcbX={channel.pcbX}
          pcbY={2.54}
          schX={channel.schX}
          schY={2.5}
          schRotation={90}
          connections={{ pin1: sel.net().HV, pin2: channel.hvNet }}
        />
      ))}

      {channelConfigs.map((channel, idx) => (
        <resistor
          key={`${channel.name}-lv-res`}
          name={channelResistorNames[idx].lv}
          resistance="10k"
          footprint={"0603"}
          pcbX={channel.pcbX}
          pcbY={-2.54}
          schX={channel.schX}
          schY={-2.5}
          schRotation={90}
          connections={{ pin1: sel.net().LV, pin2: channel.lvNet }}
        />
      ))}

      <jumper
        name="JP1"
        footprint={
          "pinrow6_nosquareplating_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal_id1.016_od1.88_p2.54"
        }
        pcbX={0}
        pcbY={-5.08}
        pinLabels={{
          pin1: "LV4",
          pin2: "LV3",
          pin3: "GND",
          pin4: "LV",
          pin5: "LV2",
          pin6: "LV1",
        }}
        connections={{
          pin1: sel.net().LV4,
          pin2: sel.net().LV3,
          pin3: sel.net().GND,
          pin4: sel.net().LV,
          pin5: sel.net().LV2,
          pin6: sel.net().LV1,
        }}
        pcbRotation={180}
        schX={-4.5}
        schY={-5.5}
        schRotation={90}
      />
      

      <jumper
        name="JP2"
        footprint={
          "pinrow6_nosquareplating_doublesidedpinlabel_id1.016_od1.88_p2.54"
        }
        pcbX={0}
        pcbY={5.08}
        pinLabels={{
          pin1: "HV1",
          pin2: "HV2",
          pin3: "HV",
          pin4: "GND",
          pin5: "HV3",
          pin6: "HV4",
        }}
        connections={{
          pin1: sel.net().HV1,
          pin2: sel.net().HV2,
          pin3: sel.net().HV,
          pin4: sel.net().GND,
          pin5: sel.net().HV3,
          pin6: sel.net().HV4,
        }}
        pcbRotation={0}
        schX={4.5}
        schY={-5.5}
        schRotation={90}
      />

            <schematictext
        text="Low Voltage"
        fontSize={0.2}
        color="gray"
        schX={-4.5}
        schY={-4.5}
      />
      <schematictext
        text="High Voltage"
        fontSize={0.2}
        color="gray"
           schX={4.5}
        schY={-4.5}
      />

      <copperpour connectsTo="net.GND" layer="top" />
      <copperpour connectsTo="net.GND" layer="bottom" />
    </board>
  )
}
