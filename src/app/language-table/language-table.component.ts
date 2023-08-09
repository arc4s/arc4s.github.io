import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  malayalam: string;
  vatteluttu: string;
  tamil_brahmi: string;
  brahmi: string;
  aramaic: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {malayalam: '\u{D05}', vatteluttu: 'A', tamil_brahmi: '\u{11405}', brahmi: '\u{11005}', aramaic: '\u{10840} (A)'},
  {malayalam: '\u{D06}', vatteluttu: 'AA', tamil_brahmi: '\u{11405}', brahmi: '\u{11006}', aramaic: '\u{10841}'},
  {malayalam: '\u{D07}', vatteluttu: 'I', tamil_brahmi: '\u{11405}', brahmi: '\u{11007}', aramaic: '\u{10842}'},
  {malayalam: '\u{D08}', vatteluttu: 'II', tamil_brahmi: '\u{11405}', brahmi: '\u{11008}', aramaic: '\u{10843}'},
  {malayalam: '\u{D09}', vatteluttu: 'U', tamil_brahmi: '\u{11405}', brahmi: '\u{11009}', aramaic: '\u{10844}'},
  {malayalam: '\u{D0A}', vatteluttu: 'UU', tamil_brahmi: '\u{11405}', brahmi: '\u{1100A}', aramaic: '\u{10845}'},
  {malayalam: '\u{D0B}', vatteluttu: 'R', tamil_brahmi: '\u{11405}', brahmi: '\u{1100B}', aramaic: '\u{10846}'},
  {malayalam: '\u{D0E}', vatteluttu: 'E', tamil_brahmi: '\u{11405}', brahmi: '\u{1100F}', aramaic: '\u{10847}'},
  {malayalam: '\u{D0F}', vatteluttu: 'EE', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{10848}'},
  {malayalam: '\u{0D10}', vatteluttu: 'AI', tamil_brahmi: '\u{11405}', brahmi: '\u{11010}', aramaic: '\u{10849}'},
  {malayalam: '\u{0D12}', vatteluttu: 'O', tamil_brahmi: '\u{11405}', brahmi: '\u{11011}', aramaic: '\u{1084A}'},
  {malayalam: '\u{0D13}', vatteluttu: 'OO', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{1084B}'},
  {malayalam: '\u{0D14}', vatteluttu: 'AU', tamil_brahmi: '\u{11405}', brahmi: '\u{11012}', aramaic: '\u{1084C}'},
  {malayalam: '\u{D05}\u{0D02}', vatteluttu: '', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{1084D}'},
  {malayalam: '\u{D05}\u{0D03}', vatteluttu: '', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{1084E}'},
  {malayalam: '\u{0D15}', vatteluttu: 'KA', tamil_brahmi: '\u{11405}', brahmi: '\u{11013}', aramaic: '\u{1084F}'},
  {malayalam: '\u{0D16}', vatteluttu: 'KHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11014}', aramaic: '\u{10850}'},
  {malayalam: '\u{0D17}', vatteluttu: 'GA', tamil_brahmi: '\u{11405}', brahmi: '\u{11015}', aramaic: '\u{10851}'},
  {malayalam: '\u{0D18}', vatteluttu: 'GHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11016}', aramaic: '\u{10852}'},
  {malayalam: '\u{0D19}', vatteluttu: 'NGA', tamil_brahmi: '\u{11405}', brahmi: '\u{11017}', aramaic: '\u{10853}'},
  {malayalam: '\u{0D1A}', vatteluttu: 'CA', tamil_brahmi: '\u{11405}', brahmi: '\u{11018}', aramaic: '\u{10854}'},
  {malayalam: '\u{0D1B}', vatteluttu: 'CHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11019}', aramaic: '\u{10855}'},
  {malayalam: '\u{0D1C}', vatteluttu: 'JA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101A}', aramaic: ''},
  {malayalam: '\u{0D1D}', vatteluttu: 'JHA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101B}', aramaic: '\u{10857}'},
  {malayalam: '\u{0D1E}', vatteluttu: 'NYA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101C}', aramaic: '\u{10858}'},
  {malayalam: '\u{0D1F}', vatteluttu: 'TTA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101D}', aramaic: '\u{10859}'},
  {malayalam: '\u{0D20}', vatteluttu: 'TTHA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101E}', aramaic: '\u{1085A}'},
  {malayalam: '\u{0D21}', vatteluttu: 'DDA', tamil_brahmi: '\u{11405}', brahmi: '\u{1101F}', aramaic: '\u{1085B}'},
  {malayalam: '\u{0D22}', vatteluttu: 'DDHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11020}', aramaic: '\u{1085C}'},
  {malayalam: '\u{0D23}', vatteluttu: 'NNA', tamil_brahmi: '\u{11405}', brahmi: '\u{11021}', aramaic: '\u{1085D}'},
  {malayalam: '\u{0D24}', vatteluttu: 'TA', tamil_brahmi: '\u{11405}', brahmi: '\u{11022}', aramaic: '\u{1085E}'},
  {malayalam: '\u{0D25}', vatteluttu: 'THA', tamil_brahmi: '\u{11405}', brahmi: '\u{11023}', aramaic: '\u{1085F}'},
  {malayalam: '\u{0D26}', vatteluttu: 'DA', tamil_brahmi: '\u{11405}', brahmi: '\u{11024}', aramaic: '\u{10855}'},
  {malayalam: '\u{0D27}', vatteluttu: 'DHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11025}', aramaic: '\u{10855}'},
  {malayalam: '\u{0D28}', vatteluttu: 'NA', tamil_brahmi: '\u{11405}', brahmi: '\u{11026}', aramaic: 'Na'},
  {malayalam: '\u{0D2A}', vatteluttu: 'PA', tamil_brahmi: '\u{11405}', brahmi: '\u{11027}', aramaic: 'aa'},
  {malayalam: '\u{0D2B}', vatteluttu: 'PHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11028}', aramaic: 'aa'},
  {malayalam: '\u{0D2C}', vatteluttu: 'BA', tamil_brahmi: '\u{11405}', brahmi: '\u{11029}', aramaic: 'aa'},
  {malayalam: '\u{0D2D}', vatteluttu: 'BHA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102A}', aramaic: 'aa'},
  {malayalam: '\u{0D2E}', vatteluttu: 'MA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102B}', aramaic: 'Ma'},
  {malayalam: '\u{0D2F}', vatteluttu: 'YA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102C}', aramaic: 'Ya'},
  {malayalam: '\u{0D30}', vatteluttu: 'RA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102D}', aramaic: 'Ra'},
  {malayalam: '\u{0D31}', vatteluttu: 'RRA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Rra'},
  {malayalam: '\u{0D32}', vatteluttu: 'LA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102E}', aramaic: 'La'},
  {malayalam: '\u{0D33}', vatteluttu: 'LLA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Va'},
  {malayalam: '\u{0D34}', vatteluttu: 'LLLA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: ''},
  {malayalam: '\u{0D35}', vatteluttu: 'FA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102F}', aramaic: 'Va'},
  {malayalam: '\u{0D36}', vatteluttu: 'SHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11031}', aramaic: 'Ssa'},
  {malayalam: '\u{0D37}', vatteluttu: 'SSA', tamil_brahmi: '\u{11405}', brahmi: '\u{11030}', aramaic: 'Sha'},
  {malayalam: '\u{0D38}', vatteluttu: 'SA', tamil_brahmi: '\u{11405}', brahmi: '\u{11032}', aramaic: 'Sa'},
  {malayalam: '\u{0D39}', vatteluttu: 'HA', tamil_brahmi: '\u{11405}', brahmi: '\u{11033}', aramaic: 'Ha'},
  {malayalam: '', vatteluttu: '', tamil_brahmi: '\u{11405}', brahmi: '\u{11034}', aramaic: 'Lla'},
  {malayalam: '', vatteluttu: '59', tamil_brahmi: '\u{11405}', brahmi: '\u{11035}', aramaic: 'Llla'},
  {malayalam: '', vatteluttu: '60', tamil_brahmi: '\u{11405}', brahmi: '\u{11036}', aramaic: 'Rra'},
  {malayalam: '', vatteluttu: '61', tamil_brahmi: '\u{11405}', brahmi: '\u{11037}', aramaic: 'Nnna'},

  {malayalam: 'Rr', vatteluttu: '8', tamil_brahmi: '\u{11405}', brahmi: '\u{1100C}', aramaic: 'aa'},
  {malayalam: 'L', vatteluttu: '9', tamil_brahmi: '\u{11405}', brahmi: '\u{1100D}', aramaic: 'aa'},
  {malayalam: 'Ll', vatteluttu: '10', tamil_brahmi: '\u{11405}', brahmi: '\u{1100E}', aramaic: 'aa'},



];

@Component({
  selector: 'app-language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.css']
})
export class LanguageTableComponent {
  displayedColumns: string[] = ['malayalam', 'vatteluttu', 'brahmi', 'aramaic'];
  dataSource = ELEMENT_DATA;
}
