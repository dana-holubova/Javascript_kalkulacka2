# Javascript_kalkulacka2
*Oživte kalkulačku.*

Vytvořte si repozitář ze šablony [cviceni-kalkulacka](https://github.com/Czechitas-podklady-WEB/cviceni-kalkulacka) se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:

![obrazek kalkulačky](https://kodim.cz/cms/assets/vyvoj-webu/js1/lekce/udalosti-formulare/cv-zaklady/kalkulacka/kalkulacka.gif)

1. Nejprve vyrobte funkci s názvem `handleDigitClick`. To bude posluchač, který později navěsíme na všechna tlačítka.
2. Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti `target` tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho `textContent`.
3. Jakmile znáte cifru, vložte ji jako `textContent` na displej kalkulačky.
4. Pověste váš posluchač na všechna tlačítka s ciframi.
5. U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.

**Bonus**

Pomocí podmínky `if` zařiďte, aby číslo na displeji nezačínalo nulou, ledaže je tam nula samotná.

