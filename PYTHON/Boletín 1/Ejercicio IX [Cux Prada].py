# -*- coding: utf-8 -*-
"""
Created on Fri Sep 17 14:06:21 2021

@author: JSNIEPRA
"""

a=int(input("Introduce el primer número : "))
b=int(input("Introduce el segundo número : "))
c=int(input("Introduce el tercer número : "))
d=a-b+c
e=a-(b+c)
print("Si calculamos",a,"-",b,"+",c,"obtendremos un",d)
print("Si calculamos",a,"-(",b,"+",c,")obtendremos un",e)