from bs4 import BeautifulSoup
import json
from collections import Counter
import requests as req

URL = "https://auth.geeksforgeeks.org/user/shiv_ka_ansh/articles"
r =  req.get(URL)
soup = BeautifulSoup(r.content, 'html5lib')

single_cards = soup.find_all(class_ = "single-card")


print(len(single_cards))

# dic_dict = {}  # create an empty dictionary to store the dictionaries
# for idx, i in enumerate(single_cards):
#     date = i.find(class_="card").find(class_="card-title").text
#     card = i.find(class_="card").find(class_ = "card-content").find('a')
#     url = card.get('href')
#     title = card.text
#     dic_dict[idx] = {"Title": title, "url": url, "date": date}

# print(dic_dict)  # print the dictionary of dictionaries

# with open("gfg.json", "w") as outfile:
#     json.dump(dic_dict, outfile)


dic_list = []  # create an empty list to store the dictionaries
for i in single_cards:
    dic={}
    date = i.find(class_="card").find(class_="card-title").text
    card = i.find(class_="card").find(class_ = "card-content").find('a')
    url = card.get('href')
    title = card.text
    dic["Title"] = title
    dic["url"] = url
    dic["date"] = date
    dic_list.append(dic)  # append the new dictionary to the list

print(dic_list)  # print the list of dictionaries
with open("gfg.json", "w") as outfile:
    json.dump(dic_list, outfile)