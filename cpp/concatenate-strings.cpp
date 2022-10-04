#include <iostream>

using namespace std;

void strcat (char* str1, char* str2) {
     while(*str1 != '\0'){
    *str1++ ;
  }

  while(*str2 != '\0'){
    *str1++ = *str2++ ;
  }

    *str1 = '\0';
}


int main() {
   char str1[] = "hello";
   char str2[] = "world";
    strcat(str1, str2);
    cout << str1; // prints helloworld
}