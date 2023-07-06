<h1>Bonjour!~ my name is Reynaldo Fang <img src="https://media.tenor.com/VtFUW-durpoAAAAC/kururin-kuru-kuru.gif" width="40px" height="40px" /></h1>

This is assignment in week 4 on Full-Stack Engineering - Frontend Infra **(Deployment,Networking,Domain,Workflow).**

If you want to follow me on social media, you can directly click the link below.

[![LinkedIn Badge](https://img.shields.io/badge/-Reynaldo_Fang-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/reynaldo-fang/)
[![Instagram Badge](https://img.shields.io/badge/-reynaldo.fang-white?style=flat&logo=instagram&logoColor=black&color=%2387ceeb)](https://www.instagram.com/reynaldo.fang/)
[![Gmail Badge](https://img.shields.io/badge/-reynaldofang02%40gmail.com-black?style=flat&logo=gmail&color=%23454c53)](mailto:reynaldofang02@gmail.com)

## How to Deploy Domain 💻⚙

### Step 1

First you have to buy a domain at [Niagahoster](https://www.niagahoster.co.id/)


![Alt text](img/niaga_front.png)

On the domain name, it's up to you to put the domain name according to your own needs.

![niaga_domain](img/niaga_domain.png)

After choosing a domain name is done, make a payment.

### Step 2

After you have done step 1, you log in or create a new ID on [Cloudfare](https://www.cloudflare.com/).

to set up our CDN (Content Delivery Network). 

After you have changed the nameservers on Niagahoster,  you have to add a new DNS record.

![dnsrecord_setup](img/dnsrecord_setup.png)

| Type | CNNAME |
| Name | @  |
| Target | Your Domain In Netlify |