#include <iostream>
#include <ctime>

int main() {
    char isIndice='n';
    int nbrRand=0, nbrMax=0, nbrMin=0, nbrInput=NULL;
    while (true) {
        std::cout<<"indice ?\n'y' pour activer,\n'n' pour desactiver,\nn'importe quel autre touche pour quitter --> ";
        std::cin>>isIndice;
        if(isIndice != 'y' && isIndice != 'n') { break; }
        std::cout<<"tu veux deviner un nombre de combien a combien ? "<<std::endl;
        std::cout<<"le nombre sera entre --> "; std::cin>>nbrMin; 
        std::cout<<"et --> "; std::cin>>nbrMax;
        srand(time(NULL));
        nbrRand = rand() % nbrMax + nbrMin;
        while (nbrInput != nbrRand) {
            std::cout<<"essaye un nombre entre "<<nbrMin<<" et "<<nbrMax<<std::endl;
            std::cout<<"--> ";
            std::cin>>nbrInput;
            std::cout<<std::endl;
            if (nbrInput == nbrRand) {
                std::cout<<"Correct !!\n"<<"appuie sur une touche pour continuer"<<std::endl;
                std::cin.get();
                std::cin.get();
            }
            else if (nbrInput > nbrRand && isIndice == 'y') {
                std::cout<<"essaye plus bas !"<<std::endl;
            }
            else if (nbrInput < nbrRand && isIndice == 'y') {
                std::cout<<"essaye plus haut !"<<std::endl;
            }
            else if (nbrInput != nbrRand && isIndice == 'n') {
                std::cout<<"Incorrect :("<<std::endl;
            }
            else {
                std::cout<<"Erreur. Input : "<<nbrInput<<std::endl;
            }
        }
    }
}