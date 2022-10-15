# -*- coding: utf-8 -*-
"""
Created on Thu Sep 16 11:55:07 2021

@author: JSNIEPRA
"""

f=open("notas.txt","r")
nota1=float(f.readline())
nota2=float(f.readline())
nota3=float(f.readline())
f.close()
media=(nota1+nota2+nota3)/3
print(media)
fs=open("media.txt","w")
fs.write(str(media))
fs.close()