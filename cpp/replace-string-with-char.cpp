#include <iostream>

using namespace std;

int getStringLength(char* p) {
int count = 0;
while(*p != '\0') {
    count ++;
    p++;
}
return count;
};

void strSet(char* s, char ch){
 int strLength = getStringLength(s);
 for (int i = 0; i < strLength; i ++) {
  if(s[i] != ch) {
      *s = ch;
       s++;
  }
}

}

int main() {
  char str[] = "hello";
    strSet(str, 'w');
    cout<<str; // prints wwwww
    return 0;
}