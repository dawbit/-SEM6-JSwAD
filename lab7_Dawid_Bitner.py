import scrapy

class zadanie1Spider(scrapy.Spider):
    name = "zadanie_1"
    start_urls = [
        'http://quotes.toscrape.com/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'cytat': quote.css('span.text::text').get(),
                'autor': quote.css('small.author::text').get(),
                'slowa': quote.css('div.tags a.tag::text').getall()
                
            }
            
            next_page =response.css('li.next a::attr(href)').get()
            if next_page is not None:
                next_page = response.urljoin(next_page)
                yield scrapy.Request(next_page, callback=self.parse)

                
zadanie_1 = pd.read_json("zadanie_1.json")
zadanie_1
text=zadanie_1.loc[zadanie_1['autor']=='Albert Einstein']
text
text.cytat
tags_list = zadanie_1["slowa"].tolist()
unique = list()

for tags in tags_list:
    for tag in tags:
        if tag not in unique:
            unique.append(tag)
            
unique

for i in range(zadanie_1.shape[0]):
    if 'love' in zadanie_1["slowa"][i]:
        print(zadanie_1['cytat'][i])
        
class zadanie_2Spider(scrapy.Spider):
    name = "zadanie_2"
    start_urls = [
        'https://helion.pl/search?qa=&serwisyall=0&szukaj=python&wprzed=0&wprzyg=0&wsprzed=1&wyczerp=0',
    ]

    def parse(self, response):
        for title in response.css('p.cover'):
            yield {
                'tytul': title.css('img::attr(alt)').get(),
                'cena': title.css('p.price price-incart a::attr(ins)').getall(),
            }

        next_page = response.css('div.stronicowanie a::attr(href)').getall()[-1]
        if next_page is not None:
            next_page = response.urljoin(next_page)
            yield scrapy.Request(next_page, callback=self.parse)
            
zadanie_2=pd.read_json('zadanie_2.json')
zadanie_2
