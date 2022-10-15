# -*- coding: utf-8 -*-
"""
Created on Fri Oct  8 13:33:32 2021

@author: JSNIEPRA
"""

N=int(input("Deme N: "))
#########################
for i in range(1,N+1):
    if i%7==0:#and i%3!=0
        print(i)
#########################
for i in range(7,N+1,7):
    print(i)
#########################
i=7
while(i<=N):
    print(i)
    i=i+7
#########################
