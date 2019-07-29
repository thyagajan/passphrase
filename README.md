# passphrasegen
A tool to generate a strong, easy to remeber and hard to break passphrase which complies with IBM new password policy.

Recently IBM has announced a new w3 passpord policy with minumum 15 characters and having 
the mix of upper case, lower case, numbers and special characters.

This tool is developed to help the people to generate a password which complies with IBM new password policy.

#Technologies
HTML
Javascript
JQuery
Bootstrap

#Third party API.
https://www.datamuse.com/api/   - to generate related words.

#How It works.
1. Prompts user to enter their favourite word.
2. Identifies words which are either means like or sounds like or represents or Adjective or Synonym or related to the entered word by randomly
  choosing the type and calling third party API with different types.
3. Randomly picks couple of words from the result set.
4. Randomly generates a 3 digit number using javascript and randomly marks 2 digits as wording.
5. Randomly selects two special characters(inlcuding space).
6. Places all of these randomly and combines as passphrase.
7. It shows 5 passphrases at a time to choose from and can click generate again if they want a different set of passwords.
8. For the common words, tool is guaranteed to generate a unique password even if the same word is used.

#How this helps user?
As a user, it is hard for them to choose a 15 digit rememberable password which should also be strong and unbreakable.
This tool generates 
  #Strong password
    * minimum 15 chars.
    * combination of Upper case, lower Case and a number.
    * Special character with or without a space.
    
   #Easy To Remember
    * Associated with your favourite word
    * Meaningful words rather than a sequence of difficult alphanumerals.
    * Simple words and numbers.
    
   #Hard to Break
    * combination of random words,numbers and special characters even their positions are random.
    * tool always generates a unique passwords even for the same favourite word as the permutations and combinations are million.
    * since it is not associated with the person directly/indirectly, hard to guess.
    
The tool does not store either the search word or the generated passwords.

When the user modifies a letter or two of their choice in the generated password, the password becomes even more stronger to break.

#Installation instructions.
Since the tool is built as a simple webpage.Whole files can be copied to desired destination
and open index.html file to access it.

#Demo
Tool demo can be found at
http://www.thyagajan.in/passphrase/







