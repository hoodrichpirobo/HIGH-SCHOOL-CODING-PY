# -*- coding: utf-8 -*-
"""
Created on Thu Oct  7 12:20:40 2021

@author: JSNIEPRA
"""

nota=int(input("¿Cuál fue su nota?: "))
if (0<=nota and nota<5):
    print("Suspendido.")
elif(5<=nota and nota<7):
        print("Aprobado.")
elif(7<=nota and nota<9):
        print("Notable.")
elif(9<=nota and nota<10):
        print("Sobresaliente.")
elif(nota==10):
        print("Matrícula de honor.")
else:
        print("Calificación incorrecta.")