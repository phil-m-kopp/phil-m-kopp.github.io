---
title: "How-To: Make website/blog for personal brand"
date: 2023-10-01
updated: 2023-10-02
tags: 
  - How-To
  - Web
  - Personal brand
categories:
  - Tech
description: description
comments: true
---

<figure markdown>
  ![Alt text](how-to-website-blog-personal-brand.webp){: loading=lazy}
  <figcaption>Image by <a href="https://www.freepik.com/">Freepik</a></figcaption>
</figure>

How and why this website came to be

<!--more-->


## Recommended first steps

1. [Choose a Markdown document focussed static site generator](#static-site-generators-ssg) (SSG) or rather template you like best -> easy setup/maintenance, focus on content
1. [Buy domain](#custom-domain-email-ssl) with email account, enable SSL -> professional appearance
1. [Generate privacy policy, imprint, license](#imprint-privacy-policy-cookie-consent) and set up cookie consent
1. Invest in a nice "About" page, maybe with contact form & social media links -> IMO an important part of personal brands is your face, a sympathetic introduction and "approachability"
1. Create [GitHub repo, install SSG](#githubgitlab-pages-static-sites-only), config, deploy via GitHub Pages/Netlify -> free and solid hosting, easy Giscus commenting integration
1. Register in Google Search Console TODO
1. Write your first article to show of your style
1. Also post your first article on Medium + LinkedIn (using cannonical link of your post) for increased exposure

## Why

## Tech considerations

### Frameworks

#### Static site generators (SSG)

- **Typical minimal setup**
    - create repo
    - choose template for your needs (landing page, blog, image portfolio...)
    - provide config values
    - publish e.g. via GitHub/GitLab
- **"static"** premise:
    - **generate HTML from static documents** (e.g. markdown) and/or via templating/frameworks (e.g. React)
    - as such **don't require a DB or backend** and code-wise **may contain little more than only the website content itself** (almost "no-code")
    - usually **SSR**-focussed: 
        - **fast** even with plugins etc., as compute effort mostly at build time + mostly CDN cachable (+ some frameworks still over single-page-application behaviour)
        - good for **SEO** as fully rendered pages are delived
- document-only/focussed frameworks
    - centered around the idea of **generating navigation and content directly from .md files**
    - for main page content to **update** a **rebuild** is usuall necessary
    - even they can be heavily **extended via underlying language**/web-framework
    - in a sense more/**easier to secure**, as no backend or DB services can be attacked
    - e.g. **proper search** usually still built-in, e.g. Giscus commenting often as plugin
- arguably **more for tech-savy people**, though templates/document-focussed frameworks **can simplify the setup almost down to few config values**
- **use you favorite editor with live-preview** (or preview with hot-reload dev-server), no need for separate CMS software
- **typically free software**

- [Markdown document focussed (⭐sorted)](https://jamstack.org/generators/)
    - [Hugo](https://gohugo.io/) (Go)
    - [Docusaurus](https://docusaurus.io/) (js + React)
    - [Jekyll](https://jekyllrb.com/) (Ruby + Liquid)
    - Hexo (js + etc.)
    - VuePress (js + Vue)
    - Eleventy  (js + Liquid)
    - [MkDocs "Material"](https://squidfunk.github.io/mkdocs-material/) / [Pelican](https://getpelican.com/) (Python + Jinja)
- [More generic web frameworks (⭐sorted)](https://jamstack.org/generators/)
    - [Next.js](https://nextjs.org/) (js + React)
    - [Gatsby](https://www.gatsbyjs.com/) (js + React)
    - [Nuxt](https://nuxt.com/) (js + Vue)
    - [Astro](https://astro.build/) (js + React/Vue...)
#### (Self-)hosted blogging software/CMS

  > About half the internet runs on WordPress 🤯 [^3]

  [^3]: https://medium.com/@lintonhale/42-of-the-internet-runs-wordpress-to-democratize-publishing-8467f3b8907a

- **Typical minimal setup**
    - Pay for hosting with one click install of your CMS of choice
    - Basic config like site name, admin account... via wizard
- **Not really free**, as hosting on server or as service has to be paid. Also most powerful plubins can be quite expensive 
- **Battle proven solutions**: having existed a decade longer, WordPress etc. have vast
    - **communities and documentation**
    - **ecosystems of plugins/integrations** for any purpose
- **More accesible UI/WYSIWYG approach** compared to SSGs for non-tech-savy people
- Careful **optimization** might be **necessary** to keep **performance** high
- **Can be harder to troubleshoot** if breaks "under-the-hood", as usually no direct control over the software code
- Self-hosted:
    **harder to secure and maintain** (updates of service software, plugins...) than document-based SSG or publishing platforms

- **Examples**
    - WordPress
    - Drupal
    - Ghost
    - Joomla
    - Blogger
    - HubSpot
    - Squarespace

- **Personal knowledge management with publish feature**:
    - [Notion.so](https://www.notion.so/)
    - [Obsidian.md](https://obsidian.md/)
#### Publishing platform

- Main advantage is a quick and easy start:
    - **start writing right away** after sign-up, no maintenance, administration etc.
    - **immediate expose** via the vast traffic, which honestly also feels quite motivating for starters
- **May be paywalled**, but thus might also **allow you monitization of your content**
- You **only own your content (legally)**, but have **little to no control** about everything else. Exporting/moving your content might be practically impossible (without dedicated tools) 
- Usually **very limited to no custimaztion/extension**, e.g. forms, newsletters, content beyond text and images... (though e.g. [Medium offers using your domain](https://help.medium.com/hc/en-us/articles/115003053487))
- **Restricted applicability for personal branding**: not ensured that visitors associate your content particularly with you, not the platform (probably less the case on LinkedIn)
- Networking opportunity amongst autors as well as autors and readers

!!! success "Recommendation"

    **Mirror your own blog** on Medium + LinkedIn <br> 
    ([using cannonical links!](https://help.medium.com/hc/en-us/articles/214550207-Import-a-post?ref=hulry.com) to mark your blog as the original source for SEO reasons)

- **Examples**
    - [Medium](https://medium.com/) (135M visits/month)
    - [Substack](https://substack.com/) (45M visits/month)
    - [DEV](https://dev.to/) (12.5M visits/month)
    - [HubPages](https://discover.hubpages.com/) (1.5M visits/month)
    - [Vocal](https://vocal.media/) (3M visits/month)
    - [LinkedIn](https://www.linkedin.com/feed/) (1.7B visits/month)

#### Comparison of selected frameworks

{{ read_csv("frameworks.csv") }}

[^1]: [https://oceanumeric.github.io/blog/jekyll-mkdocs-quarto](https://oceanumeric.github.io/blog/jekyll-mkdocs-quarto)
[^2]: [https://www.bloggersgoto.com/medium-vs-own-blog/](https://www.bloggersgoto.com/medium-vs-own-blog/), [https://hulry.com/medium-vs-own-blog/](https://hulry.com/medium-vs-own-blog/)

### Hosting for static sites

#### GitHub/Gitlab Pages (static sites only)

- GitHub over Gitlab:
    - better availability
    - easier integration of free [Giscus](https://giscus.app/) commenting

Details for [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages):

- Price: **free**
- **Custom domain**: yes
- **Prohibited uses**:
    - **online business**, e.g. webshop or SaaS solution
    - handling sensitive data, e.g. passwords or transactions
- **Limits: more than enough** for years of personal blog/brand hosting and you'll be contacted rather than charged in case you exceed the limits
    - File: 1GB
    - Repo: 1GB
    - Deployment: 10min
    - Builds: 10/h (soft)
    - Traffic: 100GB/month (soft)
- Privacy:
    - IPs are logged

#### Netlify

- basically GitHub Pages with [**additional features**](https://www.netlify.com/github-pages-vs-netlify/) like e.g. **CDN, rollbacks, asset optimization, form handling, split testing**
- very **similar usage limits** on **free plan** (but charges you for exceeded limits)
- **direct integration with most SSGs**

### Custom domain + email + SSL

- Presenting your personal blog/brand on your domain named after you simply looks more professional
- top level domain doesn't matter much: country specific domains like *.de* only have a slight local advantage. Though hosting an international site in English on a *.com* domain isn't wrong either
- if you go for a *.com* domain, you might also be able to get a cheap bundle offer (e.g. *.de* + *.com*) for very little additional cost with a domain for your country 
- afaik [hosting.de](https://www.hosting.de/domains/) is providing the cheapest *.de* domains
- the domain should come with a SSL certificate, ideally a wildcard certificate extending to subdomains
- while receiving emails might be possible via a redirect of mails from your domain to your private **email account, for replying** from your domain you either need an email server or account with your hoster - best just get it **in a bundle with the domain**
- if you are comfortable to commit (after 1 year discount), getting a domain for the next 10 years in advance comes at a good discount e.g. at [namecheap.com](https://www.namecheap.com/)

### Setup and maintenance

- **Publishing platforms are the easiest** here in any regard here. While CMSs might be easier so setup than more involved SSGs, CMSs like an **elaborate WordPress setup can be more effort to maintain than a simple SSG solution**

### Backend

- Having a SSG solution with **no backend and DB is totally possible, reduces cost, maintenance effort and security attack vectors** while realising e.g. forms is still easily possible via 3rd-party providers. **3rd-party replacement solutions come with privacy issues and possibly suboptimal UX however** (e.g. need to login to comment).



### Themes/Templates & Plugins

- Unline themes, templates go beyond styling and especially for SSG have a **huge impact on the setup experience and out of the box features**
- Particularly with CMSs but also more popular SSG like next.js, **popular themes are paid** (though they thus might also come with additional support)
- A theme and especially templates are a **central additional dependency**, that
    - **need to be updated**
    - **can e.g. also break your site** from a software perspective
    - usually **influences performance** to a greater degree
    - **can influence compatibility with other plugins/extensions**
    - might come with a **certain lock-in effect** due to specific features even if the framework isn't changed
- Especially with **SSGs** and their more generic nature, in contrast to CMSs, **plugins are more likely to be incompatible** if framework-agnostic  
- A highly popular (and thus e.g. well maintained, documented...) [framework](#frameworks) with a poor template selection for your intended purpose (e.g. blogging) might be less preferable than another less popular framework where you already found a template which you really like
- For basically all frameworks you can **find theme/templates galleries that usually also come with demo sites** you can check out right away (e.g. [Hugo](https://themes.gohugo.io/)). Ideally they also come with links to the code for the demo site, so you can and should check out if you like the [file structure](#markdown-features--file-structure) 

### Collaboration & Commenting

- **Autor collaboration** 
    - is probably not a huge concern with website aimed at personal branding
    - via Git for SSGs and multi-user-management in CMSs **usually also possible at least asynchronically**
- **User collaboration / commenting**
    - good idea from a **corereader engagement** point of view
    - **Without backend**
            - **Content**: often solved via "**edit this page**" links that lead to the **page source on GitHub**, where users can propose changes via the esablished PR request process
            - For **commenting**    
                - the popular [Disqus](https://disqus.com/) sadly comes with additional privacy protection baggage, a Disqus or facebook/Google/Twitter login as well as ads in the free version
                - [Giscus](https://giscus.app/) is the most popular **cost and ad-free** solution and also **easy to integrate** (especially if the site repo is also on GitHub) via a **simple script snippet**, though requires and only works with a GitHub login (which might be a non-issue for a technical audience)
    - SSG sites **with backend or CMS** might even offer plugins for e.g. line specific user commenting

### Forms

- forms can also be achieve via Google Forms, though for proper private vs. business separation you shouldn't your probably existing private Google account for that

### Editor
### Newsletter & RSS

- Through email communication **may seem outdated**, due to the **personal nature, in practise it's still one of the best methods** to build a **core followership** in particular
- RSS
    - is maybe underappreciated by non-powerusers for how it **can deliver content from custom sources with custom filtering without** e.g. the need to disclose one's email for a generic **newsletter** delivery
    - usually available in all frameworks, customizable to varying degree, e.g. Docusaurus even supports [multiple separate blogs + feeds!](https://docusaurus.io/docs/blog#multiple-blogs)
    - updates can be **delivered as a newsletter and sign-up managed by 3rd-party providers** via **simple form script snippet**
        - [Mailchimp](https://mailchimp.com/): popular and powerful, free with 1000 mails/month
        - [Feedburner](https://medium.com/@davideiaiunese/the-problem-why-a-newsletter-baae4409a526)
        

### Performance & SEO Optimization

- Basically all **SSGs offer very good performance**, often with [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) scores of ~100% out of the box, which shouldn't degrade to quickly if you're careful with plugins
- **CMS** like Wordpress are more **known to degrade in performance** with plugins
- **Templates for both SSG and CMS usually ensure that performance & SEO optimization** potential of the underlying framework is utilized as much as possible given the config options, e.g. lazy loading of images or exposing site and article metadata for web crawlers (which is why e.g. "optional" SEO config values shouldn't be ignored during setup)
- automatic optimization of images, e.g. downsizing or converting to *.WebP* images, is more rare out of the box, so plugins should be found or a [small script](https://github.com/phil-m-kopp/phil-m-kopp.github.io/blob/main/convertWebP.py) be included in the CI/CD pipeline
- a CDN might not be necessary for text-focussed sites, though e.g. [Cloudflare](https://www.cloudflare.com/) offers a free, near zero-config solution while hosting with Netlify even comes with a CDN
- larger popular JS libs like [charts.js](https://www.chartjs.org/) can be directly included from [cdnjs.com](https://cdnjs.com/)

TODO: Google Search Console

### Analytics

- [**Google Analytics**](https://analytics.google.com/) is the **de facto standard** for website analytics, **free** and thus pretty much **well supported** in any [framework](#frameworks)
- Other popular options like [Matomo](https://matomo.org/) often aren't free
- [Amplitude](https://amplitude.com/)'s free plan seems usable
- **Integration** is often achieve by simply including a **script snippet**
- **Quite relevant from a privacy perspective**, as e.g. non-anonymized IP adresses are already considered **PII** and tracking is usually nothing users particularly like and openly agree to (compared to submitting ones email for a newsletter)
- You may decide that e.g. authenticity is a key value for and **wouldn't change your content** in any way even if you know you could increase your traffic by e.g. focussing on content that your users prefer according to analytics - then you **can also save yourself a huge [privacy headache**](#imprint-privacy-policy-cookie-consent), maybe even a consent manager altogether (as tracking is usually the first 3rd-party service included in many sites)

### Social Sharing

Example: [:fontawesome-brands-x-twitter:](https://twitter.com/intent/tweet?text={{- page.title | urlencode -}}&url=https://philipp-kopp.com/{{- page.url | urlencode -}})

- especially if your content niche is non-technical, sharing good content should be made as easy as possible to the user to invite traffic, usually via buttons/links
- there's no need to e.g. include a facebook button as script and inviting privacy issues and degrading performance: all social service should provide a sharing url structure for desktop and mobile (e.g. ```whatsapp://send?text={text/url}```) can simply be looked up and put on the site as plain link/button (though consulting the documentation how to provide the current page url to the link is necessary)
- IMO those buttons could also be sticky, not only e.g. at the bottom of the page, if the readers want's to already share mid-read
- as more than about 6 buttons would start to become a bad user experience, it makes sense to adapt the selection of social buttons depending on your target audience possibly geographic location of your average reader (find out in your analytics tool)

### Tags & Links

- tags are **useful to critical** in many ways
    - **for user to find**
        - interesting content in the first place
        - more related content on your site, thus **staying longer**
    - for **SEO** optimization
    - picked up by **RSS** module (as are blog "categories"), potentially influencing newsletter delivery
- **DOs/DONTs**
    - post with more than 10-15 tags can be considered as spam with reader apps
    - don't be too specific, e.g. "#workingWithEbonyWood#
    - delete underused tags
    - tag list should be prominently places, maybe even be sticky when scrolling
    - tags should ideally also be considerd by the search
    - **tag archive pages** (listing articles for a clicked tag)
        - are essential for finding related conent
        - shouldn't be indexed: ```<meta name="robots" content="noindex, follow">```
        
- [**(Bi-directional) links**](https://maggieappleton.com/bidirectionals): pages being explicitly aware and **listing of both incoming and outgoing links**
    - are considered an essential concept of [second brains](https://fortelabs.com/blog/basboverview/) and digital gardens
    - sadly a **rarely seen feature** in SSGs or CMSs
    - function similarly to tags in **keeping readers on the pages**
    - at the very least it **should be easily possible to link to any page on the site**
        - incl. blog articles, particulary if you want the publish date as part of your cannonical url
        - e.g. there's a [autolink plugin](https://github.com/zachhannum/mkdocs-autolinks-plugin) for MkDocs that will automatically discover a linked *.md* file in any location similar to Obsidian.md does

### Tables

- IMO, tables are **just to good for presenting e.g. comparisons to pass up on them**
- however Medium.com doesn't support them at all and the out of the box **editing experience in Markdown is notoriously bad** (even IDE plugins often don't improve this by much)
- CMS solutions usually come with accetable table editing in their WYSIWYG editors - Notion.so is particularly pleasant and also offers lighter macro/scripting capabilities
- Plugins for CMS or SSG may even provide *.csv/.xlxs/.json/.yaml* parsing or even direct rendering (ideally while preserving Markdown formatting, as e.g. the case for the [framework comparison table above](#comparison-of-selected-frameworks)), making local editing of large tables e.g. via MS Excel or proper table editing IDE plugins possible

![Alt text](table-editing.webp){: loading=lazy}

### Diagrams (as markdown)

```md
´´´mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
´´´
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

- **Directly rendering** diagrams usually produces ***.svg* output**
    - scale nicely
    - take up very little space
    - come with selectable text
    - while staying editable in the document as markdown
- **draw.io diagrams** can be saved as *.drawio.png*, making handling a **non-issue in any environment** without special support
    - stay fully editable via the draw.io apps
    - can also be rendered or converted like a normal .png image
    - can be exported again e.g. as an copy/paste HTML iframe with additional features like zooming 

### Localization

- localization is **a more rare feature**
- even then often only a language switch is provided, but translations have to be provided manually
- SSGs/web frameworks could potentially translate content during built time
- interesting if you want to write in English for global reach **but e.g. your niche is also particularly popular in your country, mostly not talked about in English by tech-savy people** so that users would use a browser translate plugin (e.g. home improvement in Germany)
- translation of image text extremely rare

### Mobile first

- **responsive frontend design** is the norm now, but the **doesn't automatically mean mobile first**
- **try viewing** your favorite articles on **mobile** (if not the case right now 😏) or via desktop browser dev tools and see if e.g. **TOC, social buttons, header, article metadata incl. autor info, tags, cookie consent** is still somewhat **usable and e.g. tables don't widly overflow**

### Markdown features & file structure

!!! tip "File structure"

    - This can be a **crucial [framework](#frameworks) decision**, as e.g. Jekyll wants to see articles, assets/images and tabular data in different directories and e.g. also **doesn't support simple linking to other files in the same directory** as the article - which is **very different to how Markdown e.g. used for documentation usually works**
    - Especially for people who maintain their [second brain](https://fortelabs.com/blog/basboverview/) e.g. with Obsidian.md or who got employer approval to release company-agnostic internal knowledge documentation they wrote as a blog post, this means that a workflow where knowledge content is more or less simply published from already existing local content is not possible
    - As **efficiently using existing export knowledge (especially gained in a professional environment) is IMO an important strategy of building a professional personal brand**, this was a deal breaker regarding Jekyll for me

- The [basic Markdown syntax](https://www.markdownguide.org/basic-syntax/) that's (almost) guaranteed to be supported everywhere is far less rich (e.g. no tables) than many are used to e.g. from GitHub
- **The more you lean into extended syntax**, [Javascript enhanced Markdown "MDX"](https://mdxjs.com/) or even more framework-specific features
    - the less you'll get to enjoy editor live-previews
    - your options to simply copy/paste/migrate your *.md* files decrease, again **possibly critically limiting leveraging of existing knowledge**
- **Acceptable, widely supported and very useful** extended features IMO include
    - Tables
    - Code blocks with syntax highlighting (not necessarily inline though)
    - Heading IDs: for referencing/linking in large articles
    - Inline HTML: e.g. forcing line breaks ```<br>```
    - [Diagrams as markdown](#diagrams-as-markdown): pretty much supported via plugins everywhere
    - Frontmatter: necessary for basically all frameworks for page metadata (though syntax can slightly differ!)
    - Quoting via ```> quote text```
    - Reference-style links: to re-use links or for simple script links like [Alert][Alert] ```[Alert]: javascript:alert("Foo")``` which only seem to work like this
- **Nice to have and/or not widely supported**
    - highlighting (vs **emphasis**), strikethrough, sub/superscript
    - emoji shortcodes like :smile: (```:smile:```): maybe use text emojis instead
    - footnotes: often times not supported
    - TOC (as tag): at least syntax is often different between frameworks. Though a good framework should render a TOC e.g. in sidebar anyways
    - Wiki-style links (e.g. Obsidian.md: ```[[page-xy]]```)

[Alert]: javascript:alert("Foo")

## Legal

!!! warning "Disclaimer"
    
    This does not constitute any form of legal advice. Use at your own risk.

- **Germany in particular** comes with **quite strict/involved** data protection requirements due to GDPR and other legal requirements

### Imprint, Privacy Policy & Cookie Consent

- if you **publish content under your domain** and simply put are "**not just a autor on a publishing site**" like Medium.com, Obsidian.md or Notion.so and want to legally do business in a "GDPR country" or live in one, you are responsible for providing the following:
    - **Privacy Policy**
        - **Use a generator** like from [datenschutz-generator.de](https://datenschutz-generator.de/), [e-recht24.de](https://www.e-recht24.de/muster-datenschutzerklaerung.html), [Termly.io](https://termly.io/products/privacy-policy-generator/)
        - the most involved because individual process is probably to describe which data is processed how, why and for who by which 3rd-party (service), incl. a link to their privacy policy 
        - a more elaborate policy (declaring to collect more data from more sources than you actually do) is afaik not harmful from a legal perspective, only possibly intimidating to users
    - under GDPA: **Data Processing Agreements (DPA)**
        - with 3rd-parties that process your users data and without e.g. there being a NDA
        - usually: your hoster, Google Analytics, newsletter service
    - **Cookie/Script Consent** "feature"
        - **non-essential** (e.g. Google Analytics, unlike e.g. shopping cart content related cookies) **cookies AND other data collection scripts etc.** need to be **blocked** until explicitly approved by the user
        - this also means that the site needs be stay usable even if consent is not given
        - a "reject all" button is optional
        - a **link/button to change/"manage" consent** must also always be available on the page (e.g. footer)
        - built-in framework cookie consent solutions are somewhat rare with SSGs, especially managing consent at any time. Though basically it's only about simply not loading the typically providing tracking script snippets until a consent cookie is present after pressing a button (see solutions for [react](https://www.npmjs.com/package/react-cookie-consent), [Hugo](https://hugocodex.org/add-ons/cookie-consent/), [Jekyll](https://jekyllcodex.org/without-plugin/cookie-consent/))

- this **setup/maintenance effort as well as possible legal liability** in case of e.g. data breaches is the main reason why **"free" 3rd-party services/scripts shouldn't be mindlessly relied on**
    - e.g. simply make your [own sharing links/buttons](#social-sharing) instead
- if you publish content **in Germany**, you **always need** an **imprint**:
    - Consisting of an address for mails via post (can be your private but also be another address with mail forwarding to you - "Impressumsservice") as well as a phone numbers OR contact form (email address alone apparently not sufficient)
    - Bi-directional links to other social media presences should also go here, if there's a connection to any commercial activity via those social media presences

- all of the above need to always be acessible and clearly labeled, e.g. as links in the footer

### Copyright/Licensing

  - **your content** is usually automatically **protected under copyright law** in most countries
  - it still doesn't hurt to **point that out on all pages e.g. in the footer** via "© {year} {name}. All rights reserved under {license}"
  - you can decide to declare a **more lax copyright, so that others can build upon your work** (usually given autor attribution): e.g. use the [Creative Commons Licence Chooser](https://chooser-beta.creativecommons.org/) and put the output on your page
  

## Features
- Blogging
- RSS
- Social buttons
- Social links
- Markdown richness

1) Choose a platform and domain (e.g. yourname.com).
2) Design a clean, intuitive layout with easy navigation.
3) Showcase your projects, providing descriptions and code repository links.
4) Highlight your skills, certifications, and achievements.
5) Personalize the About Me section, detailing your experience.
6) Include clear contact information for recruiters to reach out.
7) Optimize for SEO with relevant keywords and fast page loading.
8) Maintain a blog section for insightful posts related to software engineering.
9) Integrate social media for networking and engagement.
10) Monitor and continuously update your portfolio to reflect your growth.

It should include your bio, resume, contact details, testimonials, and links to your social media profiles, blog, or other online platforms. It should also demonstrate your coding skills, creativity, and problem-solving abilities by featuring your best and most relevant projects, with clear descriptions, screenshots, and links to the source code or live demos.

==Define your niche==

Social media platforms such as LinkedIn, Twitter, GitHub, or Stack Overflow can help you connect with other software developers, potential clients, employers, or partners, as well as showcase your portfolio, blog, podcast, or open source contributions. You can also use social media to share your thoughts, ideas, questions, or resources on software development, as well as to join relevant groups, communities, or discussions.

The best way to stand out is to create and share content. You don't need to be an expert to do that. You can begin by sharing questions, ideas or your journey from where you are to where you want to be.
