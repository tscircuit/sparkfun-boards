import React from "react"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14", "OSC32_IN"],
  pin4: ["PC15", "OSC32_OUT"],
  pin5: ["PH0", "OSC_IN"],
  pin6: ["PH1", "OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["VSSA"],
  pin13: ["VDDA"],
  pin14: ["PA0"],
  pin15: ["PA1"],
  pin16: ["PA2"],
  pin17: ["PA3"],
  pin18: ["VSS1"],
  pin19: ["VDD1"],
  pin20: ["PA4"],
  pin21: ["PA5"],
  pin22: ["PA6"],
  pin23: ["PA7"],
  pin24: ["PC4"],
  pin25: ["PC5"],
  pin26: ["PB0"],
  pin27: ["PB1"],
  pin28: ["PB2", "BOOT1"],
  pin29: ["PB10"],
  pin30: ["PB11"],
  pin31: ["VCAP1"],
  pin32: ["VDD2"],
  pin33: ["PB12"],
  pin34: ["PB13"],
  pin35: ["PB14"],
  pin36: ["PB15"],
  pin37: ["PC6"],
  pin38: ["PC7"],
  pin39: ["PC8", "SDIO_D0"],
  pin40: ["PC9", "SDIO_D1"],
  pin41: ["PA8"],
  pin42: ["PA9"],
  pin43: ["PA10"],
  pin44: ["PA11", "USB_DM"],
  pin45: ["PA12", "USB_DP"],
  pin46: ["PA13", "SWDIO"],
  pin47: ["VCAP2"],
  pin48: ["VDD3"],
  pin49: ["PA14", "SWCLK"],
  pin50: ["PA15"],
  pin51: ["PC10", "SDIO_D2"],
  pin52: ["PC11", "SDIO_D3"],
  pin53: ["PC12", "SDIO_CLK"],
  pin54: ["PD2", "SDIO_CMD"],
  pin55: ["PB3"],
  pin56: ["PB4"],
  pin57: ["PB5"],
  pin58: ["PB6"],
  pin59: ["PB7"],
  pin60: ["BOOT0"],
  pin61: ["PB8"],
  pin62: ["PB9"],
  pin63: ["VSS2"],
  pin64: ["VDD4"],
} as const

export const STM32F405RGT6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="STM32F405RGT6"
      supplierPartNumbers={{
        jlcpcb: ["C81431"],
      }}
      footprint={
        <footprint>
          {/* LQFP-64 10x10mm body, 0.5mm pitch */}
          {/* Bottom side pins 1-16 */}
          {Array.from({ length: 16 }, (_, i) => {
            const pinNum = i + 1
            const x = -3.75 + i * 0.5
            return (
              <React.Fragment key={`pin${pinNum}`}>
                <smtpad
                  portHints={[`pin${pinNum}`]}
                  pcbX={x}
                  pcbY={-5.5}
                  width={0.3}
                  height={0.7}
                  shape="rect"
                />
              </React.Fragment>
            )
          })}
          {/* Right side pins 17-32 */}
          {Array.from({ length: 16 }, (_, i) => {
            const pinNum = i + 17
            const y = -3.75 + i * 0.5
            return (
              <React.Fragment key={`pin${pinNum}`}>
                <smtpad
                  portHints={[`pin${pinNum}`]}
                  pcbX={5.5}
                  pcbY={y}
                  width={0.7}
                  height={0.3}
                  shape="rect"
                />
              </React.Fragment>
            )
          })}
          {/* Top side pins 33-48 */}
          {Array.from({ length: 16 }, (_, i) => {
            const pinNum = i + 33
            const x = 3.75 - i * 0.5
            return (
              <React.Fragment key={`pin${pinNum}`}>
                <smtpad
                  portHints={[`pin${pinNum}`]}
                  pcbX={x}
                  pcbY={5.5}
                  width={0.3}
                  height={0.7}
                  shape="rect"
                />
              </React.Fragment>
            )
          })}
          {/* Left side pins 49-64 */}
          {Array.from({ length: 16 }, (_, i) => {
            const pinNum = i + 49
            const y = 3.75 - i * 0.5
            return (
              <React.Fragment key={`pin${pinNum}`}>
                <smtpad
                  portHints={[`pin${pinNum}`]}
                  pcbX={-5.5}
                  pcbY={y}
                  width={0.7}
                  height={0.3}
                  shape="rect"
                />
              </React.Fragment>
            )
          })}
          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -5, y: -4.5 },
              { x: -5, y: -5 },
              { x: -4.5, y: -5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5, y: -5 },
              { x: 5, y: -4.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5, y: 5 },
              { x: 4.5, y: 5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5, y: 5 },
              { x: -5, y: 4.5 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
