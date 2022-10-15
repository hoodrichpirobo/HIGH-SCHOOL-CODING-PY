# -*- coding: utf-8 -*-
"""
Created on Fri Oct  8 13:11:21 2021

@author: JSNIEPRA
"""

sumapos=0
sumaneg=0
contpos=0
contneg=0

for i in range(5):
    num=float(input("Deme un número real: "))
    if (num>=0):
        sumapos=sumapos+num
        contpos=contpos+1
    else:
        sumaneg=sumaneg+num
        contneg=contneg+1
        
print("La suma de los positivos es ",sumapos/contpos)
print("La suma de los negativos es ",sumaneg/contneg)