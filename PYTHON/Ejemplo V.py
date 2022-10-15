# -*- coding: utf-8 -*-
"""
Created on Mon Oct  4 11:56:58 2021

@author: JSNIEPRA
"""

mes=int(input("Deme un mes (1-12): "))
while(mes<1 or mes>12):
    print("Mes erroneo")
    mes=int(input("Deme un mes(1-12): "))
    
if(mes==1):
        print("Enero")
if(mes==2):
        print("Febrero")