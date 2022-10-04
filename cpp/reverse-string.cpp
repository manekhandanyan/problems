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


void reverseString(char* str){
    int arrLength = getStringLength(str);
    char *startPointer = str;
    char *endPointer = str;
    char ch;
    for (int i = 0; i < arrLength - 1; i++)
    endPointer++;
    for (int i = 0; i < arrLength / 2; i++) {

    ch = *endPointer;
    *endPointer = *startPointer;
    *startPointer = ch;

    startPointer++;
    endPointer--;
  }
}


int main() {
    char arr[] = "hello";
    reverseString(arr);
    cout << arr; //prints  olleh
}