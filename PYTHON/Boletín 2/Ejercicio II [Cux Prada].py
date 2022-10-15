# -*- coding: utf-8 -*-
"""
Created on Fri Oct  1 12:46:43 2021

@author: JSNIEPRA
"""

num1=int(input("Introduzca un número entero: "))
num2=int(input("Introduzca un número entero: "))
num3=int(input("Introduzca un número entero: "))
maximo=num1
minimo=num1
if (num2>maximo):
    maximo=num2
if(num3>maximo):
    maximo=num3
print("Máximo es:",maximo)

if (num2<minimo):
    minimo=num2
if(num3<minimo):
    minimo=num3
print("Mínimo es:",minimo)