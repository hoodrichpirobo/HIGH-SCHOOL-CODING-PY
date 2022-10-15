# -*- coding: utf-8 -*-
"""
Created on Fri Oct  8 13:03:58 2021

@author: JSNIEPRA
"""

sumapar=0
sumaimpar=0
for i in range(5):
    num=int(input("Deme un número entero positivo:"))
    if (num%2==0):
        sumapar=sumapar+num
    else:
        sumaimpar=sumaimpar+num
        
print("La suma de los pares es ",sumapar)
print("La suma de los impares es ",sumaimpar)