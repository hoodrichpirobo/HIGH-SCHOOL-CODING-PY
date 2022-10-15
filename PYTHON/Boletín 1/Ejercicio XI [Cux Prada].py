# -*- coding: utf-8 -*-
"""
Created on Sun Sep 19 22:30:15 2021

@author: cuxel
"""

a=int(input("Introduzca el capital : "))
b=float(input("Introduzca el interés invertido en tanto por cien : "))
c=int(input("Introduzca la duración en días : "))
d=(a*b*c)/(360*100)
print("El interés generado por un capital de ",a,"euros al",b,"% de interés durante",c,"días es de ",d,"euros.")