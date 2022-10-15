# -*- coding: utf-8 -*-
"""
Created on Mon Oct 11 12:01:45 2021

@author: JSNIEPRA
"""

sexo=input("Déme el sexo(h/m): ")
edad=int(input("Edad: "))
altura=float(input("Altura: "))
if(sexo=="h"):
    if(edad>=14):
        if(altura>=1.7):
            print("Seleccionado")
        else:
            print("No seleccionado")
    else:
         if(altura>=1.55):
            print("Seleccionado")
         else:
            print("No seleccionado")
else: 
    if(sexo=="m"):
        if(edad>=14):
            if(altura>=1.6):
                print("Seleccionada")
            else:
                print("No seleccionada")
        else:
         if(altura>=1.4):
            print("Seleccionada")
    else:
            print("No seleccionada")