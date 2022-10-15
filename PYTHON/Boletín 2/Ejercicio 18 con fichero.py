# -*- coding: utf-8 -*-
"""
Created on Fri Oct 15 13:04:56 2021

@author: JSNIEPRA
"""

f=open("edades.txt","r")

suma=0
cont=0
contactivas=0
'''
edad=int(f.readline())
max=edad
min=edad
cont=1
suma+=edad
if(18<=edad and edad<=65):
        contactivas+=1
'''
max=0
min=999
for linea in f:
    edad=int(linea)
    suma+=edad
    cont+=1
    if(edad>max):
        max=edad
    if(edad<min):
        min=edad
    if(18<=edad and edad<=65):
        contactivas+=1
f.close()
print("La media será: ",suma/cont)
print("El mínimo será: ", min)
print("El máximo será: ", max)
print("Habrán ", contactivas," personas pertenecientes a la población activa")