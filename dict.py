# list_a = [1,2,3,4,5]
# list_b = [10,20,3,4,5]

# t = [a for a in list_a if a in list_b]
# print(t)

# string = 'In 1984 there were 13 instances of a protest with over 1000 people attending'

# words = string.split()
# # print(words)

# t = [n for n in words if not n.isalpha()]
# for i in t:
#     print(i,end=' ,')

# print(t)

# r = ['even' if n%2==0 else 'odd' for n in range(20)]
# print(r)
# list_a = [1,2,3,4,5,6,7,8,9]
# list_b = [2,7,1,12]
# t = [(a,b) for a in list_a for b in list_b if a == b]
# print(t)

# name = 'sai'
# t = [n for n in name [-1]]
# print(t)

# i = 12
# for j in reversed(range(i)):
#     print(j,end=',')


# Program to handle multiple errors with one
# except statement
# Python 3

# def fun(a):
# 	if a < 4:

# 		# throws ZeroDivisionError for a = 3
# 		b = a/(a-3)

# 	# throws NameError if a >= 4
# 	print("Value of b = ", b)

# try:
# 	fun(3)
# 	fun(5)

# # note that braces () are necessary here for
# # multiple exceptions
# except ZeroDivisionError:
# 	print("ZeroDivisionError Occurred and Handled")
# except NameError:
# 	print("NameError Occurred and Handled")

# print('\t tab','\nnew line')
 

# import re

# text = "ABCDEFGHIJabcdef09324"


# pattern = re.compile(r'[a-zA-Z0-9]')

# matches = pattern.search(text)
# # for match in matches:
# #     print(match)
# print(matches)

import re
def is_allowed_specific_char(string):
    charRe = re.compile(r'[^a-zA-Z0-9]')
    string = charRe.search(string)
    return not bool(string)

print(is_allowed_specific_char("ABCDEFabcdef123450")) 
print(is_allowed_specific_char("*&%@#!}{"))
