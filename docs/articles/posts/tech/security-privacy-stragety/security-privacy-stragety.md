---
draft: true
title: "Guide: Personal Tech Security & Privacy"
slug: guide-tech-security-privacy-strategy
date: 2025-01-26
updated: 2025-01-26
tags: 
  - Guide
  - Tech
categories:
  - Tech
description: Personal Tech Security & Privacy Strategy
comments: true
---

- What to consider about tech security, privacy (and backups)
- Regarding the topics
  - Address/post
  - Phone
  - Email
  - Documents
  - Web
  - Password
  - Payment
  - Device

<!--more-->

## Dangers of neglecting tech security & privacy

### Security
- direct theft of money
- identity theft
  - invoicing purchases to you
  - decreased credit rating
  - account access frozen (payment, other services...)
  - reputational damage
    - crime in ones name
    - sensitive data leaks
    - private professional brand/trust damage
  - exhausting legal battles & doxing/harassment
  - feeling of violation & living in anxiety of attacks yet to happen
- legal (compliance) consequences in case of major neglect
- blackmail & ransom attacks

### Privacy
- contract rejection (medical records, car accidents...)
- deepfake attacks on family
- burglary, cyberstalking etc.

Also see: ["Google: a walk down privacy lane" on CupWire](https://archive.ph/XzrbQ)

## Security & privacy in general

### Compartmentalization

- separating data of any kind for different purposes, e.g.
  - work/job
  - personal professional (e.g. personal brand, business, LinkedIn)
  - personal private (e.g. family and friends)
  - personal public (e.g. social, dating, shopping)
  - perosnal sensitive (e.g. health, finance, civil)
- when/where? can be done in most areas, from email over user profiles to even addresses
- benefits
  - organization
  - security: isolation
  - privacy: limiting the potentially exponential value increase of correlating your data across situations

### Pseudonyms

- your "alter egos" for different situations, though one is sufficient for most cases/people
- pseudonym should have own set of all data typically required for registration/contact purposes
  - address
  - birthday
  - phone
  - email
  - credit card
- depending on situation the contact data can be entirely fake or actually forward to you anonymously
- proving plausible fake information has benefit of
  - drawing less attention/suspicion than outright hiding data
  - making profiling harder by producing incoherent data

### Data cleanup

- When in doubt consider that the internet never forgets
- non-EU and especially are noticably more clingy with your data
- Overwriting (sensitive) data with junk is better than removal in many cases
  - given it's often legally sufficient to mark data as "deactivated" rathen then deleting it 
- [Ingocni](https://incogni.com/)
  - maybe try for 1 month for 80% of effect
- [JustDeleteMe](https://justdeleteme.xyz/)
  - check before account creation how "clingy" the company is

### US vs EU: paid options vs laws

- US has more advanced privacy service like [MySudo](https://anonyome.com/individuals/mysudo-plans/)
  - EU has stronger privacy laws that make
    - fewer options less of an issue
    - more extreme methods like SIMless phone less necessary

## Security & privacy per topic

### Address/post

Caveats
- legal requirements for a physical address ("ladungsfähig") in certain cases like business mail
  - operating e.g. own blog or business without this can get you fined

#### Services

| **Service**                                                                      | **Cost**      | **Description**                                                   | **Providers**                                                                                                                                     | **Supports Name Anonymization** | **Supports Packages** | **Legal Physical/Business Address** | **Other Notes**                                                                      |
| -------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| [**"Postfach"**](https://www.deutschepost.de/de/p/postfach.html)                 | ~30€/year     | "Postfach" locker inside Post offices - no forwarding             | Deutsche Post                                                                                                                                     | No                              | No                    | No                                  | - More secure as harder to intercept than home mail.<br>- Mail needs to be picked up |
| **Packing stations**                                                             | Free          | For packages, nothing else                                        | [DHL](https://www.dhl.de/de/privatkunden/pakete-empfangen/an-einem-abholort-empfangen/packstation/empfangen-packstation.html), UPS, Amazon Locker | No                              | Yes                   | No                                  |                                                                                      |
| **Imprint services**                                                             | ~5-20€/month  | Physical address for legal requirements, e.g. blogs or businesses | e.g. [Autorenservices](https://www.autorenservices.de/impressums-service/)                                                                        | Yes                             | No                    | Yes                                 | Mail forwarding usually costs extra.                                                 |
| **Scan and forwarding services**                                                 | ~10-40€/month | Full aliasing and convenience/ digitization service               | e.g.<br>[Clevver](https://www.clevver.io/de/produkte/clevvermail-postdigitalisierung/#prices), [Dropscan](https://www.dropscan.de/preise/privat)  | Yes                             | Yes 💵               | Yes 💵                             | Still not suitable for all kinds of personal mail, e.g. tax confirmations.           |
| [**"Nachsendeservice"**](https://www.deutschepost.de/de/n/nachsendeservice.html) | ~30€/6 month  | Forwards mail from one address to another for up to 6 months.     | Deutsche Post                                                                                                                                     | No                              | No                    | No                                  | Explicitly forbids use for address anonymization.                                    |

### Phone number

#### Security
- phone numbers are not only security relevant indirectly via communiction (see social engineering) but nowadays also directly e.g. in 2FA
  - e.g. in Germany especially critical services like bank, health insurance like to only offer SIM 2FA without alternative
  - SIM hijacking is hard to defend against as fraudsters often use attack vectors out of the users control, like SIM provider customer support
    - depending on the attack (and e.g. personal use of the SIM), a SIM transfer is hard to notice just by absence of incoming calls/SMS
  - phone numbers can often be considered as significant proof of identity, thus can play a role in identity theft
    - your voicemail can be enough to clone your voice for an AI to impersonate you    
- phone calls an SMS are inherently insecure because unencrypted, making eavesdropping trivial given certain hardware
  - treat them like public conversations

#### Privacy
- Mobile network providers can track your location accurately via cell phone tower triangulation while identifying your via your SIM IMEI
  - e.g. in US network providers routinely sell this information
- SIM cards actually funtion as small individual computers, using the phones hardware but bypassing the software (e.g. VPNs -> split tunneling) [^SIMcomputer]
- not all countries allow anonymous SIM purchase
- dedicated privacy measures probably not necessary in EU thanks to data protection laws

[^SIMcomputer]: https://youtu.be/RyirQOCUUK8?feature=shared&t=156

#### Mitigation

- airplane mode will prevent location tracking but only SIM removal will stop the SIM doing anything on its own
- use encrypted messengers like [Signal](https://signal.org/) for both text and calls
- deactivate voicemail to prevent voice cloning
- harden your provider account to prevent SIM hijacking
- Compartementalization
  - Having e.g. 5 phone numbers is feasible nowadays
    - pre paid is often sufficient as mainly the number is needed, wifi can handle communication just fine 
    - eSIMs can't all be active at the same time but still be switched and are harder to steal

| Compartment                      | Notes                                                    | Usually on? | Incoming calls/SMS | Outgoing calls/SMS | Data plan |
| -------------------------------- | -------------------------------------------------------- | ----------- | ------------------ | ------------------ | --------- |
| Work + dating/events             | number not expected to be valid for long                 | yes         | All (worktime)     | See compartment    | Main      |
| Family & friends<br>(+ security) | always active. Usable for e.g. banking 2FA as well       | yes         | All                | Prefer VoIP        | (Backup)  |
| Security                         | for other or all 2FA, possible only turned on explicitly | no          | SMS only           | -                  | -         |
| Service<br>incl. messaging       | public number meant for e.g. registration only           | no          | Reject             | -                  | -         |
| Travel                           | Usually data-only plans                                  | no          | Reject             | -                  | Prepaid   |

### Email

### Web

#### Browser 6 search

#### VPN

#### DNS

### Password

### Payment

### Device

#### Mobile

- Privacy control (e.g. app permissons) and security (e.g. sandboxing) better on iOS/Android compared to desktop

#### Desktop

## Backups: general tips

### 3-2-1 backup method

- **3x copies**: primary working copy + 2 backups
- **2x storage media**: e.g. local disk + cloud
- **1x offsite** e.g. external drive or cloud