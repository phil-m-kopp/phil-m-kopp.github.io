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

### Zero-knowledge E2E encryption

- In zero-knowledge or client E2E encryption
  - your auth is used to decrypt the data stored at the provider
  - no unencrypted data ever leaves your device

---

- Red flag: the ability to restore ones access to account data e.g. via recovery link is a sign that the provider has full control over that data
- Adding more alternative ways of auth can never increase "security" as it only increaes possible attack vectors
  - The provider either wants to
    - avoid customer care cases due to lockout
    - or collect more data about you
    - or both

![alt text](account_security_bad.png)

- True zero-knowledge providers will offer no recovery methods on their side other than
  - recovery keys 
  - recovery from a device still logged in to your account
  
![alt text](account_security_good.png)

- Providers serious about security will allow to disable auth and recovery options
  - so that you can effectively reduce attack vectors and focus on securing the remaining ones

![alt text](account_recovery.png)

Being locked out because no valid auth can be produced is what security is all about!
If losing your key isn't a big deal because of "convenient account recovery methods" then the account wasn't secure to begin with

### Authentification methods

The following table lists common auth method and their susceptibility to remote and physical attack vectors
- attack vectors are considered in isolation, e.g. given a fingerprint clone a device passkey is not safe on unlocked device. But without it, a passkey is not less secure on an unlocked device

⚪ no known threat
🟢 very low risk
🔵 low risk
🟡 moderate risk
🟠 high risk
🔴 very high risk

| Auth method                     | Brute Force / Dictionary                                  | Phishing (remote)                                                                                   | MITM  (Evilginx) -&gt; session hijacking                                               | Physical Access to locked device<br>(Victim away)                                                                      | Physical Access to locked device (Victim present)                                                           | Physical Access to unlocked device (Victim away 2min)                                                                  | Watching the Victim                                                                                              |
| :------------------------------ | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| PIN (short but device specific) | 🟢 Protected by wipe/ lockout                            | 🔵 possible, but useless with access to device                                                     | 🟠 anti-malware helps, but<br>PIN + session stolen at same time can auth most actions | 🟡 Keylogger (wired + wireless), as PIN as need to be typed                                                           | 🟢 Physical threat needed                                                                                  | 🔴 Software keylogger etc                                                                                             | 🔴 short PIN easily remembered                                                                                  |
| Password (Manager) + TOTP       | 🟢 changing TOTP                                         | 🔵 unlikely with PW manager autofill[^1] + anti-malware<br><br>TOTP prevents re-login / 2FA change | 🟡 anti-malware helps<br><br>TOTP prevents re-login / 2FA change                      | 🔵 Keylogger: passwords usually autocompleted + TOTPs invalid after use by victim<br>                                 | 🟢 PIN: Physical threat needed<br><br>🟠 Fingerprint unlock:  easily forced<br><br>TOTP seed could copied | 🟠 Software keylogger etc (harder without typed password)<br><br>TOTP prevents re-login / 2FA change<br>              | 🔵 Password + TOTP need to be spied on and typed fast<br><br>TOTP prevents re-login / 2FA change                |
| Passkey                         | ⚪ device-bound credential                                | ⚪ FIDO2/ WebAuthn                                                                                  | ⚪ FIDO2/ WebAuthn                                                                     | ⚪ No access or cloning possible                                                                                       | 🟢 PIN<br>🟠 Biometric (can be forced/spoofed)                                                            | ⚪ PIN or biometrics required                                                                                          | 🔴 PIN<br>🟢 Biometric                                                                                         |
| Fingerprint                     | 🟢 "master fingerprints" have low success rate + lockout | ⚪ FIDO2/ WebAuthn                                                                                  | ⚪ FIDO2/ WebAuthn                                                                     | 🟡 optical readers can be spoofed with prints from environment<br><br>🟢 capacitive readers need sophisticated clone | 🟠 easily forced and danger of cloning                                                                     | 🟡 optical readers can be spoofed with prints from environment<br><br>🟢 capacitive readers need sophisticated clone | 🟡 optical readers can be spoofed with photos of fingers<br><br>🟢 capacitive readers need sophisticated clone |
| Face                            | 🟢 "master face" have low success rate + lockout         | ⚪ FIDO2/ WebAuthn                                                                                  | ⚪ FIDO2/ WebAuthn                                                                     | 🟢 no known biometric face spoofing/ cloning                                                                          | 🔴 very easily forced                                                                                      | 🟢 no known biometric face spoofing/ cloning                                                                          | 🟢 no known biometric face spoofing/ cloning                                                                    |
| Hardware Key + Fingerprint/PIN  | ⚪ hardware key                                           | ⚪ FIDO2/ WebAuthn                                                                                  | ⚪ FIDO2/ WebAuthn                                                                     | ⚪ No access or cloning possible                                                                                       | 🟢 PIN<br>🟠 Biometric (can be forced/spoofed)<br>                                                        | ⚪ hardware key + FIDO2/WebAuthn                                                                                       | 🔵 PIN<br>🟢 Biometric                                                                                         |

[^autofill]: Specify valid target URL with your passwords so that your PW won't be able to autofill on pishing websites

#### PINs, passwords and other short secrets

- offer the possibility of (plausible) deniability
- PINs especially for device unlock usually need to be typed (as device is locked), so there's a constant risk if them being seen
- privacy screens and keypad scrambling can make spying harder
- less recommended in public for regular unlocks as eventually people will see and remember
- as forgetting them is common, customer care is more likely to bypass/disable them to help "the customer" regain access

- password manager tricks
  - you can use 2 password managers for additional security multiple ways
    - split all passwords in two parts and store them in different managers
    - store important passwords in one and rest in the other manager
    - store passwords in one and TOTPs in other manager
  - store most important passwords only partionally and remember
  - peppering: split (important) passwords into the password saved in the manager + a random string at the end that you keep in mind, e.g.
    - Amazon PW: 6ybhLNKW**g8e3**
    - Zalando PW: jte4nYWH**g8e3**
- you might want to keep important passwords only on paper or in mind to elimate threat of data leaks

#### Passkeys

- combination of username + password + "2FA" functionality presents a single point of failure
  - undermines the whole MFA concept
  - enables attackers to unlock your accounts "without even knowing the keyhole"
    - this is relevant for passkeys on devices not immediate tied to you:
      - e.g. your Amazon passkey on a hardware key: if lost in public and without PIN, attackers can just try popular sevices like Amazon and see what account it unlocks
- though device specific, password managers can also store them to enable cross device usage
  - this can actually increase security, as PWMs allow you to put additional PIN/biometrics auth in between

#### Biometrics

- recommended to disable during protests etc. because law enforcement can force unlock easily
- can't be lost
- but also not replaced once compromised - shouldn't be considered a secret but rather similar to a username
- older fingerprint readers aren't secure at all. Three current techs are
  - optical (e.g. Google Pixel 8): can be fooled with clones of your finger from photos or even prints off the device they secure
  - capacitive: will also consider the depth profile of your finger and can come with "liveness checks" to prevent spoofing e.g. via clones made of glue
  - ultrasonic (e.g. Google Pixel 9): further enhances geometric checks etc. 

#### Hardware keys

- provide the highest security overall and also against most attack vectors individually
  - especially if additionally secured with PIN or biometrics

#### MFA

- generally MFA should be realized via entirely separate devices
  - e.g. malware on same computer could compromise PWM 1 for passwords and PWM 2 for TOTPs at the same time
- MFA also protects against social engineering attacks against customer care
- Even in case of successful session hijacking with compromised password, MFA will usually prevent any security related account changes that could e.g. lead to total account takeover

- SIM is the worst due to the unsafe (unencrypted) protocol and threat of SIM hijacking out of your control
- Email is reasonably safe given high email account security is recommended anyways
  - though bit cumbersome and possible damage is high as password + 2FA security could be compromised at the same time for many accounts
- Device prompts have the benefit of MFA device isolation as they are device specific
  - though promts without confirmation on unlocked devices can be dangerous
    - especially with many devices, e.g. people had their kids confirm promts without them knowing
- Hardware keys etc. are ideal, as they are dedicated offline devices that can additionally be secured via PIN/biometrics 

![alt text](device_promts.png)
[https://news.softpedia.com/news/google-now-allows-g-suite-admins-to-roll-out-sign-in-prompts-to-all-phones-523120.shtml]

#### General

- Keep automatic locking e.g. for device screen, password managers as short as possible to limit the attack surface on unlocked devices/accounts
- The more you use you most secure methods (e.g. hardware key, master-master key for password manager) also for unimportant stuff, the higher the exposure to attacks

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

### Emergency access/dead man switch

Emergency recovery sheet
	- Ensure access in case of memory loss
	- Delayed access: notification to you to stop request (only access if you can't)