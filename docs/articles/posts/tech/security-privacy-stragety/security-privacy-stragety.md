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

### Authentification methods

- hardware keys e.g. a FIDO2 Yubikey especially if additionally secured with PIN or fingerprint provide the highest security overall and also against most attack vectors individually
- Both secrets and biometrics have specific advantages
  - secrets like PINs offer the possibility of (plausible) deniability but can be observed and pished as they then need to be typed
    - as they can be "lost", 2FA disable by customer care is more likely here than with e.g. biometrics
  - biomtrics 

⚪ no known threat
🟢 very low risk
🔵 low risk
🟡 moderate risk
🟠 high risk
🔴 very high risk

| Auth method                    | Brute Force / Dictionary                                  | Phishing (remote)                                                                          | Social Engineering (customer care etc.)                             | MITM  (Evilginx) -&gt; session cookie                                    | Physical Access<br>(Victim away)                                                                    | Physical Access (Victim present)                                                                             | Physical Access to unlocked device (Victim away 2min)                                                     | Watching the Victim                                                                                 |
| :----------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| PIN                            | 🟢 Protected by wipe/lockout                             | 🔵 remote screen or 🟡 existing session required                                         | 🟡2FA disable likely possible                                      | 🟠 (with Anti-Malware)                                                  | 🟡 Keylogger (USB keyboards)                                                                       | 🟢 Protected by wipe/lockout                                                                                | 🟠 Software keylogger etc                                                                                | 🔴 short PIN easily remembered                                                                     |
| Password (Manager) + TOTP      | 🟢 changing TOTP                                         | 🔵 with Anti-Malware + PW manager autofill[^1]<br><br>TOTP prevents re-login / 2FA change | 🟡2FA disable likely possible                                      | 🟡 (with Anti-Malware)<br><br>prevents re-login / 2FA change            | 🟢 Password not vulnerable to keylogger; TOTP often invalid after use by victim<br>                | 🔵 PIN unlock<br><br>🟠 fingerprint unlock of password manager easily forced<br><br>TOTP seed could copied | 🟡 Software keylogger etc (harder without typed password)<br><br>TOTP prevents re-login / 2FA change<br> | 🟡 Password + TOTP can be spied on<br><br>TOTP prevents re-login / 2FA change                      |
| Fingerprint                    | 🟢 "master fingerprints" have low success rate + lockout | ⚪ (FIDO2/WebAuthn)                                                                        | 🔵 2FA disable unlikely                                            | 🟡 (with Anti-Malware)<br><br>Biometrics prevents re-login / 2FA change | 🟡 (sophisticated) fingerprint clones can spoof common optical (/sophisticated capacitive) readers | 🔴 easily forced or making clone                                                                            | 🟡 (sophisticated) fingerprint clones can spoof common optical (/sophisticated capacitive) readers       | 🟡 (sophisticated) fingerprint clones can spoof common optical (/sophisticated capacitive) readers |
| Face                           | 🟢 "master face" have low success rate + lockout         | ⚪ (FIDO2/WebAuthn)                                                                        | 🔵 2FA disable unlikely<br><br>identical twin often not sufficient | 🟡 (with Anti-Malware)<br><br>Biometrics prevents re-login / 2FA change | ⚪ e.g. no known biometric face cloners                                                             | 🔴 easily forced                                                                                            | 🟢 modern readers not vulnerable to photos                                                               | 🟢 modern readers not vulnerable to photos                                                         |
| Hardware Key + Fingerprint/PIN | ⚪ hardware key                                           | ⚪ (FIDO2/WebAuthn)                                                                        | 🟢 2FA disable very unlikely                                       | ⚪ (FIDO2/WebAuthn)                                                      | ⚪ (FIDO2/WebAuthn)                                                                                 | 🔵 PIN<br>🔴 Fingerprint<br>                                                                               | ⚪ hardware key + FIDO2/WebAuthn                                                                          | 🔵 PIN<br>🟡 Fingerprint                                                                          |

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
- phone numbers are not only security relevant indirectly via communiction (see social engineering) but nowadays also directly e.g. in MFA
  - e.g. in Germany especially critical services like bank, health insurance like to only offer SIM MFA without alternative
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
| Family & friends<br>(+ security) | always active. Usable for e.g. banking MFA as well       | yes         | All                | Prefer VoIP        | (Backup)  |
| Security                         | for other or all MFA, possible only turned on explicitly | no          | SMS only           | -                  | -         |
| Service<br>incl. messaging       | public number meant for e.g. registration only           | no          | Reject             | -                  | -         |
| Travel                           | Usually data-only plans                                  | no          | Reject             | -                  | Prepaid   |

### Email

#### Security

- Email is another popular option for MFA and often more secure than SMS as e.g. all email accounts need passwords
- Poses a major attack vector if connected accounts don't use MFA, as email password recovery basically serves as universal password
- With increasing digitalization, email accounts might contain similar amounts of sensitive data than computer or smartphone (shopping, finance, health, political...)
- It easier to impersonate somebody via text than e.g. calls and an email inbox usually contains enough personal information (e.g. address, birthday) to authorize more sensitive processes in your name
- Harder to regain control, as email accounts can be opened anonymously, so there's little legal ownership to begin with
  - With access to similar information as you but control over your account, in the digital world a fraudster will have more authorite over your identify than you
- Free providers often don't encrypt your data (also see privacy), which makes them vulnerable to data leaks
- Some providers reuse deleted addresses, which will at the very least lead to uncomfortable identify switch

#### Privacy

- Free providers likely sell you data or insights from scanning your mail one way or another
  - With increasing digitization, the possible impact only grows

#### Migration

Considering the potentially catastrophic consequences of losing control of ones (main) email account:

- delete/archive (out of account) mail regularly
- MFA should be considered mandatory - hardware keys highly recommended 

### Web

#### Security

#### Privacy

#### Migration

#### Browser 6 search

#### VPN

#### DNS

### Password

#### Security

#### Privacy

#### Migration

### Payment

#### Security

#### Privacy

#### Migration

### Device

#### Security

#### Privacy

#### Migration

#### Mobile

- Privacy control (e.g. app permissons) and security (e.g. sandboxing) better on iOS/Android compared to desktop

#### Desktop

## Backups: general tips

### 3-2-1 backup method

- **3x copies**: primary working copy + 2 backups
- **2x storage media**: e.g. local disk + cloud
- **1x offsite** e.g. external drive or cloud