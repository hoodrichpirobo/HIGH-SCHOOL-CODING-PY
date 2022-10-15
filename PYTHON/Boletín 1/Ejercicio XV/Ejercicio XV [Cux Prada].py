# -*- coding: utf-8 -*-
"""
Created on Fri Sep 24 12:58:30 2021

@author: JSNIEPRA
"""

fichero=open("notas.txt", "r")
a=float(fichero.readline())
b=float(fichero.readline())
c=float(fichero.readline())
fichero.close()
final=0.4*(a+b)+0.2*(c)
print("{0:.2f}".format(final))
ficherosalida=open("final.txt","w")
ficherosalida.write("{0:.2f}".format(final))
ficherosalida.close()