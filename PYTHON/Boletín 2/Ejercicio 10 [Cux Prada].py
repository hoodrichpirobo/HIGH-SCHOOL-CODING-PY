# -*- coding: utf-8 -*-
"""
Created on Fri Oct  8 12:45:21 2021

@author: JSNIEPRA
"""
n=int(input("Deme N: "))
m=int(input("Deme N: "))
if n>m:
    aux=n
    n=m
    m=aux
    
suma=0
for i in range(n,m+1):
    suma=suma+i
    
print("Suma entre",n,"y",m,"es:",suma )