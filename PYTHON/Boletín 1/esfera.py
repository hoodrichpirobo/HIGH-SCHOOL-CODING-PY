# -*- coding: utf-8 -*-
"""
Created on Fri Sep 17 12:52:32 2021

@author: JSNIEPRA
"""

from math import pi
print("Programa para el cálculo del volumen de una esfera.")
radio=float(input("Dame el radio:"))
volumen =4 / 3 * pi * radio ** 3
print("Volumen: {0:.3f} metros cúbicos".format(volumen))
print ("Gracias por usar el programa.")