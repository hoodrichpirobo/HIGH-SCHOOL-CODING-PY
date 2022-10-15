# -*- coding: utf-8 -*-
"""
Created on Mon Sep 27 12:10:12 2021

@author: JSNIEPRA
"""

n=int(input("Deme cuantos: "))
i=2
while(i<=n*2):
    print(i)
    i=i+2
    print()
    for i in range(2,n*2+1,2):
        print(i)