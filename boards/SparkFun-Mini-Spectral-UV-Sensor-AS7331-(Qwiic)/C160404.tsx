import type { ChipProps } from "@tscircuit/props"

    const pinLabels = {
      pin1: ["pin1"],
      pin2: ["pin2"],
      pin3: ["pin3"],
      pin4: ["pin4"],
      pin5: ["pin5"],
      pin6: ["pin6"]
    } as const

    export const SM04B_SRSS_TB_LF__SN_ = (props: ChipProps<typeof pinLabels>) => {
      return (
        <chip
          pinLabels={pinLabels}
          supplierPartNumbers={{
      "jlcpcb": [
        "C160404"
      ]
    }}
          manufacturerPartNumber="SM04B_SRSS_TB_LF__SN_"
          footprint={<footprint>
            <smtpad portHints={["pin2"]} pcbX="-0.4998720000000958mm" pcbY="2.0005166999999346mm" width="0.5999987999999999mm" height="1.5500095999999999mm" shape="rect" />
    <smtpad portHints={["pin1"]} pcbX="-1.4998699999999872mm" pcbY="2.0005166999999346mm" width="0.5999987999999999mm" height="1.5500095999999999mm" shape="rect" />
    <smtpad portHints={["pin4"]} pcbX="1.5003779999999551mm" pcbY="2.0000086999999667mm" width="0.5999987999999999mm" height="1.5500095999999999mm" shape="rect" />
    <smtpad portHints={["pin3"]} pcbX="0.5003800000000638mm" pcbY="2.0000086999999667mm" width="0.5999987999999999mm" height="1.5500095999999999mm" shape="rect" />
    <smtpad portHints={["pin6"]} pcbX="-2.800096000000053mm" pcbY="-1.8750152999999727mm" width="1.1999975999999999mm" height="1.7999964mm" shape="rect" />
    <smtpad portHints={["pin5"]} pcbX="2.800096000000053mm" pcbY="-1.8755233000000544mm" width="1.1999975999999999mm" height="1.7999964mm" shape="rect" />
    <silkscreenpath route={[{"x":-2.019960400000059,"y":-2.397467900000038},{"x":1.8800063999999566,"y":-2.397467900000038}]} />
    <silkscreenpath route={[{"x":-1.9400266000000101,"y":1.8624676999997973},{"x":-3.019958400000064,"y":1.8624676999997973},{"x":-3.019958400000064,"y":-0.7374763000001394}]} />
    <silkscreenpath route={[{"x":2.040000999999961,"y":1.8624676999997973},{"x":2.9600143999999773,"y":1.8624676999997973},{"x":2.9600143999999773,"y":-0.7443089000000782}]} />
          </footprint>}
          
          {...props}
        />
      )
    }