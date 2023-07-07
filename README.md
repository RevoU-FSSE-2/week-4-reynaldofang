## Introduction

<h1>Bonjour!~ my name is Reynaldo Fang <img src="https://media.tenor.com/VtFUW-durpoAAAAC/kururin-kuru-kuru.gif" width="40px" height="40px" /></h1>

This is assignment in week 4 on Full-Stack Engineering - Frontend Infra **(Deployment,Networking,Domain,Workflow).**

If you want to follow me on social media, you can directly click the link below.

[![LinkedIn Badge](https://img.shields.io/badge/-Reynaldo_Fang-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/reynaldo-fang/)
[![Instagram Badge](https://img.shields.io/badge/-reynaldo.fang-white?style=flat&logo=instagram&logoColor=black&color=%2387ceeb)](https://www.instagram.com/reynaldo.fang/)
[![Gmail Badge](https://img.shields.io/badge/-reynaldofang02%40gmail.com-black?style=flat&logo=gmail&color=%23454c53)](mailto:reynaldofang02@gmail.com)

## Deploy Link

https://www.reynaldofang.site/

## Deploy Documention 💻⚙

### Buy Domain

**Step 1 :** First you have to buy a domain at [Niagahoster](https://www.niagahoster.co.id/)

![Alt text](img/niaga_front.png)

**Step 2 :** On the domain name, it's up to you to put the domain name according to your own needs.

![niaga_domain](img/niaga_domain.png)

**Step 3 :** After choosing a domain name is done, make a payment.

![niaga_dashboard](img/niaga_dashboard.png)

Now your domain arleady done.

### Deploy Your Website in Netfliy

**Step 1 :** Open **[Netlify](https://app.netlify.com/)** and Login.

![netlify_homepage](img/netlfliy_homepage.png)

**Step 2 :** Go to tab **"Team Overiew"**

**Step 3 :** Click **"Add new Site"**

![netlify_dashboard](img/net_dashboard.jpg)

**Step 4 :** Click **"Import an existing project"**

![netlify_save](img/net_save.png)

**Step 5 :** Select your repository from Github

![netlify_repo](img/net_repo.jpg)

**Step 6 :** Pick an Owner

**Step 7 :** Pick branch main

**Step 8 :** Click **Deploy Site**

![netlify_deploy](img/net_deploy.png)

**Step 9 :** After you deploy, you will get the site name

**Step 10:** Click **Domain Settings**

![netlify_domain_setting](img/net_domain.png)

**Step 11:** Choose the site name and Edit the site name

**Step 12:** Fill the site name and Click **Save**

![netlify_changesite](img/net_changesite.png)

### Custom DNS

After you have done **Buy Domain & Set Up Netlify**, now we set up the Custom DNS.

**Step 1:** Login or create a new ID at [Cloudfare](https://www.cloudflare.com/).

**Step 2:** Enter the Domain that you bought in **Niagahoster**

![cloud_domain](img/cloud_domain-2.png)

**Step 3 :** Go To DNS Tab - Click "Add Record"

![dnsrecord_setup](img/cloud_addrecord.png)

**Step 4 :** Choose the type to **"CNAME"**

**Step 5 :** Name **www**

**Step 6 :** Copy and Paste your **Netlify** Subdomain to Target & Click **Save**

![dnsrecord_newrecord](img/cloud_dns.png)

**Step 7:** Go To **"Domain Settings"** on **Netlify**.

![net_domainset](img/net_domainset.png)

**Step 8:** Click **Add a domain**.

![net_adddomain](img/net_adddomain.png)

**Step 9::** Enter your Custom Domain Name that you bought at **Niagahoster** and Click **Verify**.

![net_setupdomain](img/net_setupdomain.png)

**Step 10 :** Done, your domain is now the main domain.

![primary_domain](iomg/../img/primary_domain.png)

### Change Your Nameservers

Don't forget change your Nameserver value

**Step 1 :** Go To **Niagahoster** and Click **Kelola Layanan**.

![niaga_dashboard](img/niaga_dashboard.png)

**Step 2 :** Go to tab Overview Domain and Click **Change Nameserver**.

![niaga_change](img/niaga_change.png)

**Step 3 :** Go to **Cloudfare** DNS Tab and see Cloudfare Nameserver and copy server values.

![cloud_value](img/cloud_value.png)

**Step 4 :** The value copied on **Cloudflare**, paste the value in Update Nameserver on **Niagahoster** and Click **Save**.

![niaga_update](img/niaga_update.png)

Done Now Your Value Nameserver arleady change.

![niaga_value](img/niaga_value.png)

### Website Launch

After we have done all the steps above, we wait for the nameserver status to be **active** on **Cloudflare**.

![cloud_active](img/cloud_active.png)

or you can get notification in email, if server arleady **active**.

![cloud_email](img/cloud_email.png)

Now you can run your website.

I hope the steps above can help you.

Thank You.

<img src="https://gifdb.com/images/high/tanjiro-demon-slayer-smile-ug5qxtabnbi4yebd.gif"  width="465px" height="262px"/>
