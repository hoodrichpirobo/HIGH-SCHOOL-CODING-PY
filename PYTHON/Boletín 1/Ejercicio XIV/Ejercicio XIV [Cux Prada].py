# -*- coding: utf-8 -*-
"""
Created on Fri Sep 24 12:43:34 2021

@author: JSNIEPRA
"""


fichero=open("alturas.txt","r")
a=int(fichero.readline())
b=int(fichero.readline())
c=int(fichero.readline())
d=int(fichero.readline())
e=int(fichero.readline())
fichero.close()
media=(a+b+c+d+e)/5
print("La media es: ", media)