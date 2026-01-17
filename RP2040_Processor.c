#include <stdio.h>
#include <string.h>

#define TOTAL_PINS 56
#define FUNC_LEN   30
#define NAME_LEN   50

/* Structure to define the RP2040 Processor Board details */
typedef struct {
    char boardName[NAME_LEN];
    char processor[20];
    char packageType[10];
    int totalPins;
} ProcessorBoard;

/* Structure to define Pin Mapping for MicroMod Connector */
typedef struct {
    int pinNumber;
    char function[FUNC_LEN];
} PinMap;

/* Function to initialize the RP2040 Board details */
void initBoard(ProcessorBoard *board)
{
    if (board == NULL)
        return;

    strcpy(board->boardName, "SparkFun MicroMod RP2040");
    strcpy(board->processor, "RP2040");
    strcpy(board->packageType, "QFN-56");
    board->totalPins = TOTAL_PINS;

    printf("Board Initialized Successfully\n");
    printf("Board Name   : %s\n", board->boardName);
    printf("Processor    : %s\n", board->processor);
    printf("Package Type : %s\n", board->packageType);
    printf("Total Pins   : %d\n", board->totalPins);
}

/* Initialize all pins with default values */
void initPinMap(PinMap *mapping)
{
    int i;

    if (mapping == NULL)
        return;

    for (i = 0; i < TOTAL_PINS; i++) {
        mapping[i].pinNumber = i + 1;
        strcpy(mapping[i].function, "UNASSIGNED");
    }
}

/* Function to implement MicroMod Connector Pin Mapping */
void setupConnector(PinMap *mapping)
{
    if (mapping == NULL)
        return;

    strcpy(mapping[0].function, "USB_D+");
    strcpy(mapping[1].function, "USB_D-");
    strcpy(mapping[2].function, "GND");
    strcpy(mapping[3].function, "3.3V");
    strcpy(mapping[4].function, "I2C_SDA");

    printf("\nMicroMod Connector Pin Mapping (Preview):\n");
    for (int i = 0; i < 5; i++) {
        printf("Pin %-2d : %s\n",
               mapping[i].pinNumber,
               mapping[i].function);
    }
}

/* Function to simulate peripheral connectivity */
void checkConnectivity(void)
{
    printf("\nChecking Board Circuitry...\n");
    printf("[OK] 12 MHz Crystal Oscillator Connected\n");
    printf("[OK] QSPI Flash Memory Connected\n");
    printf("[OK] USB Mux (FSUSB30) Initialized\n");
    printf("[OK] User LED Circuitry Active\n");
}

/* Main Function */
int main(void)
{
    ProcessorBoard myBoard;
    PinMap micromodPins[TOTAL_PINS];

    printf("=========================================\n");
    printf(" SparkFun MicroMod RP2040 Simulation\n");
    printf("=========================================\n\n");

    /* Step 1: Initialize Board */
    initBoard(&myBoard);

    /* Step 2: Initialize Pin Map */
    initPinMap(micromodPins);

    /* Step 3: Setup Connector Pin Mapping */
    setupConnector(micromodPins);

    /* Step 4: Verify Circuitry */
    checkConnectivity();

    printf("\nDeployment Successful!\n");
    printf("System Ready for Circuit Integration.\n");

    return 0;
}
