---
layout:   post
title:    Use Google Sheets to make your own dictionary
keywords: building dictionary,build synonym,english vietnamese dictionary
description: a tutorial for using Google Sheets to build a simple dictionary
thumbnail: /assets/images/2019/dictionary-template-thumbnail.png
comments: true
tags: [hot]
---

If you have experience to lookup Vietnamese words in English dictionary, you must be noticed that the quality of the translation is often unsatisfied. Let's look deeply in this problem by using two popular dictionaries, `Google Translate` and `English Vietnamese Dictionary TFlat`.

{% include plugins/google-ad-automatic-size.html %}

When we lookup the words, **chính phủ** and **chính quyền**, both of them are translated as **government**.

![](/assets/images/2019/lookup-dictionary-in-google-translate.png)
<figcaption>Translated by Google Translate</figcaption>

![](/assets/images/2019/lookup-dictionary-in-TFlat.png)
<figcaption>Translated by English Vietnamese Dictionary TFlat</figcaption>

In fact, they indicate to different types of government:

`chính phủ` means central government.
> ex: the Vietnamese government

`chính quyền` means local government.

> ex: the Hanoi government

![chính phủ vs chính quyền](/assets/images/2019/flashcard_chính_phủ_chính_quyền.png)

So, for the learning purpose, record these subtle details, I used Google Sheets to build a dictionary with search function and automatic translate by Google Translate. In addition, I've shared it to public. You can download this template to build your own personal dictionary.

<a href="https://docs.google.com/spreadsheets/d/1VZshDXLVmui1-YJ8G6jGwvlmtnx-PIByAWwsAoVyB9M/edit?usp=sharing" target="_blank" rel="nofollow"><i class="fa fa-download"></i> Download Template</a>

![google sheets for dictionary template](/assets/images/2019/dictionary-template-thumbnail.png)

<figcaption>Dictionary Template, powered by Google Sheets</figcaption>

---

Please follow these steps to use this template:

##### Step 1 - Add new record

* Add new vocabulary to `data` sheet

![](/assets/images/2019/dictionary-template-tutorial-setp-1-1.png)

* Check the automatic translation in **Google Translate** column. If you are not satisfied with it, you can make a revision in **Revised** column.

![](/assets/images/2019/dictionary-template-tutorial-setp-1-2.png)

* [optional] - Add an example sentence in **example** column. You also can make a revision in **Revised ex** column if you are not satisfied with the translation.

![](/assets/images/2019/dictionary-template-tutorial-setp-1-3.png)
![](/assets/images/2019/dictionary-template-tutorial-setp-1-4.png)

##### Step 2 - Add new category - [optional]

* Add new category to `category` sheet, and go back to `data` sheet to select an appropriate category for the new record.

![](/assets/images/2019/dictionary-template-tutorial-setp-2-1.png)

##### Step 3 - Language Setting - [Optional]

* If you want to use this template in other language, you can modify the language code on the row 2 in the `data` sheet.

![](/assets/images/2019/dictionary-template-tutorial-setp-3-1.png)

* Lookup the language code you wanted in the `lang code` sheet

![](/assets/images/2019/dictionary-template-tutorial-setp-3-2.png)

##### Step 4 - Search record in the dashboard

* Move to the `Dashboard` sheet, and search vocabualry in **E** column

![](/assets/images/2019/dictionary-template-tutorial-setp-4-1.png)

* You also can search translated word in **E** column, or even search both of searching conditions to find your records.

![](/assets/images/2019/dictionary-template-tutorial-setp-4-2.png)

---

Building our own dictionary can have lots of benefit. It just like taking a note on our notebook, impress us, and also provide a convenient way to recall it.

If you like this post, please share it. 😃

---

### Reference Links

* <a href="https://docs.google.com/spreadsheets/d/1VZshDXLVmui1-YJ8G6jGwvlmtnx-PIByAWwsAoVyB9M/edit?usp=sharing" target="_blank" rel="nofollow"><i class="fa fa-download"></i> Download Template</a>
* <a href="https://translate.google.com" target="_blank" rel="nofollow">Google Translate</a>
* <a href="https://itunes.apple.com/vn/app/english-dictionary-tflat/id591049834?mt=8" target="_blank" rel="nofollow">English Vietnamese Dictionary TFlat on AppStore</a>
* <a href="https://play.google.com/store/apps/details?id=com.vn.dic.e.v.ui&hl=en_US" target="_blank" rel="nofollow">English Vietnamese Dictionary TFlat on GooglePlay</a>