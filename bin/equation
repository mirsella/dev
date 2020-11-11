#!/usr/bin/env python
from sympy import Eq, solve, symbols, sympify
import sys
from fractions import Fraction

def getstdin():
    return input("entrer l'equation : ").split("=")

def calculate(eq):
    print(eq)
    x = symbols('x')
    eq = str(solve(eq, x)).strip("[]")
    print("x =", eq, "=", float(Fraction(eq)))
    

    
def filter(eq):
    eq = list(map(str.strip, eq))
    print(eq)
    eq = Eq(sympify(eq[0]),sympify(eq[1]))
    return eq

if __name__ == "__main__":
    if len(sys.argv) == 1:
        calculate(filter(getstdin()))

    elif len(sys.argv) == 2:
        # sys.argv[1] = sys.argv[1].split("=")
        calculate(filter(sys.argv[1].split("=")))

    elif len(sys.argv) == 3:
        # for i in range(1,3):    
        #     sys.argv[i] = sys.argv[i].replace("=","")
        calculate(filter((sys.argv[1]+sys.argv[2]).split("=")))

    elif len(sys.argv) == 4:
        # print(sys.argv[1]+sys.argv[3])
        calculate(filter((sys.argv[1]+sys.argv[2]+sys.argv[3]).split("=")))