import _thread
import time
import random
import os
import sys
from pynput import keyboard

under = 0
bigger = 0
pile = 0
randwhile = True
mainwhile = True
randattempt = 0

def on_press(key):
    global mainwhile
    if key.char == ("q"):
        randwhile = False
        mainwhile = False
        return False


def randfunc():
    global pile
    global under
    global bigger
    global randwhile
    global mainwhile
    global randattempt

    random.seed()
    while randwhile:
        randtmp = random.randint(0, 100)
        if randtmp > 50:
            bigger += 1
        elif randtmp < 50:
            under += 1
        elif randtmp == 50:
            pile += 1
        randattempt += 1
    mainwhile = 0


if __name__ == "__main__":

    _thread.start_new_thread(randfunc, ())

    listener = keyboard.Listener(on_press=on_press)
    listener.start()

    while mainwhile:
        print("sous 50 : ", under/randattempt*100, "%")
        print("pile 50 : ", pile/randattempt*100, "%")
        print("sur 50  : ", bigger/randattempt*100, "%")
        print("tirage  : ", randattempt)

        time.sleep(0.5)
        if mainwhile:
            os.system("clear")
