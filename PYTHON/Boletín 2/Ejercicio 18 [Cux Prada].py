# -*- coding: utf-8 -*-
"""
Created on Fri Oct 15 12:39:10 2021

@author: JSNIEPRA
"""

suma=0
cont=0
contactivas=0
edad=int(input("Introduzca su edad: "))
max=edad
min=edad
while(edad>=0):
    suma+=edad
    cont+=1
    if(edad>max):
        max=edad
    else:
        min=edad
    edad=int(input("Introduzca su edad: "))
    if(18<=edad and edad<=65):
        contactivas+=1
print("La media será: ",suma/cont)
print("El mínimo será: ", min)
print("El máximo será: ", max)
print("Habrán ", contactivas," personas pertenecientes a la población activa")