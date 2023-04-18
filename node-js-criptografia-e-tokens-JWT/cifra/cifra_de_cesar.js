/* Cifra de Cesar

    A B C D E F G H I J  K  L  M
    0 1 2 3 4 5 6 7 8 9 10  11 12

    N   O  P  Q  R  S  T  U  V  W  X  Y Z
    13 14 15 16 17 18 19 20 21 22 23 24 25

//Abaixo um exemplo de 7 posições de deslocamento para cifrar a mensagem 
+7 

ABACATE
HIHJHAL

//Para decifrar a mensagem retornamos o deslocamento de 7 posições
-7
ABACATE

(codigoDaLetra + desloc) % tamDoAlfabeto
=> (codigoDaLetra + 7) % 26
___________________________________________//___________________________________________

Com essa formula conseguimos obter qualquer caractere 
((codigoDaLetraAsc - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

O F no ASC é o número 70
("F".charCodeAt(0) - 65) = 5
5 + 7 = 12
12 % 26 = 12

___________________________________________//___________________________________________

1) Começa com um código ASC
2) Obtem o código de 0 a 25
3) Deslocamos ele e caso ele passe, voltamos

                -65         +desl      %tam     +65
*/

codigoASC => codigo0a25 = desloco => giro => codigoASC



