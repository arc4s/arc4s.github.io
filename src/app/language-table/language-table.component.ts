import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  malayalam: string;
  khmer: string,
  vatteluttu: string;
  tamil_brahmi: string;
  brahmi: string;
  aramaic: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    malayalam: '\u{D05}',
    khmer: '',
    vatteluttu: 'A',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11005}',
    aramaic: '\u{10840} (A)'
  },
  {
    malayalam: '\u{D06}',
    khmer: '',
    vatteluttu: 'AA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11006}',
    aramaic: '\u{10841}'
  },
  {
    malayalam: '\u{D07}',
    khmer: '',
    vatteluttu: 'I',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11007}',
    aramaic: '\u{10842}'
  },
  {
    malayalam: '\u{D08}',
    khmer: '',
    vatteluttu: 'II',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11008}',
    aramaic: '\u{10843}'
  },
  {
    malayalam: '\u{D09}',
    khmer: '',
    vatteluttu: 'U',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11009}',
    aramaic: '\u{10844}'
  },
  {
    malayalam: '\u{D0A}',
    khmer: '',
    vatteluttu: 'UU',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1100A}',
    aramaic: '\u{10845}'
  },
  {
    malayalam: '\u{D0B}',
    khmer: '',
    vatteluttu: 'R',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1100B}',
    aramaic: '\u{10846}'
  },
  {
    malayalam: '\u{D0E}',
    khmer: '',
    vatteluttu: 'E',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1100F}',
    aramaic: '\u{10847}'
  },
  {malayalam: '\u{D0F}', khmer: '', vatteluttu: 'EE', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{10848}'},
  {
    malayalam: '\u{0D10}',
    khmer: '',
    vatteluttu: 'AI',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11010}',
    aramaic: '\u{10849}'
  },
  {
    malayalam: '\u{0D12}',
    khmer: '',
    vatteluttu: 'O',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11011}',
    aramaic: '\u{1084A}'
  },
  {malayalam: '\u{0D13}', khmer: '', vatteluttu: 'OO', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: '\u{1084B}'},
  {
    malayalam: '\u{0D14}',
    khmer: '',
    vatteluttu: 'AU',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11012}',
    aramaic: '\u{1084C}'
  },
  {
    malayalam: '\u{D05}\u{0D02}',
    khmer: '',
    vatteluttu: '',
    tamil_brahmi: '\u{11405}',
    brahmi: '',
    aramaic: '\u{1084D}'
  },
  {
    malayalam: '\u{D05}\u{0D03}',
    khmer: '',
    vatteluttu: '',
    tamil_brahmi: '\u{11405}',
    brahmi: '',
    aramaic: '\u{1084E}'
  },
  {
    malayalam: '\u{0D15}',
    khmer: '\u{1780}',
    vatteluttu: 'KA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11013}',
    aramaic: '\u{1084F}'
  },
  {
    malayalam: '\u{0D16}',
    khmer: '\u{1781}',
    vatteluttu: 'KHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11014}',
    aramaic: '\u{10850}'
  },
  {
    malayalam: '\u{0D17}',
    khmer: '\u{1782}',
    vatteluttu: 'GA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11015}',
    aramaic: '\u{10851}'
  },
  {
    malayalam: '\u{0D18}',
    khmer: '\u{1783}',
    vatteluttu: 'GHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11016}',
    aramaic: '\u{10852}'
  },
  {
    malayalam: '\u{0D19}',
    khmer: '\u{1784}',
    vatteluttu: 'NGA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11017}',
    aramaic: '\u{10853}'
  },
  {
    malayalam: '\u{0D1A}',
    khmer: '\u{1785}',
    vatteluttu: 'CA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11018}',
    aramaic: '\u{10854}'
  },
  {
    malayalam: '\u{0D1B}',
    khmer: '\u{1786}',
    vatteluttu: 'CHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11019}',
    aramaic: '\u{10855}'
  },
  {
    malayalam: '\u{0D1C}',
    khmer: '\u{1787}',
    vatteluttu: 'JA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101A}',
    aramaic: ''
  },
  {
    malayalam: '\u{0D1D}',
    khmer: '\u{1788}',
    vatteluttu: 'JHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101B}',
    aramaic: '\u{10857}'
  },
  {
    malayalam: '\u{0D1E}',
    khmer: '\u{1789}',
    vatteluttu: 'NYA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101C}',
    aramaic: '\u{10858}'
  },
  {
    malayalam: '\u{0D1F}',
    khmer: '\u{178A}',
    vatteluttu: 'TTA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101D}',
    aramaic: '\u{10859}'
  },
  {
    malayalam: '\u{0D20}',
    khmer: '\u{178B}',
    vatteluttu: 'TTHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101E}',
    aramaic: '\u{1085A}'
  },
  {
    malayalam: '\u{0D21}',
    khmer: '\u{178C}',
    vatteluttu: 'DDA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{1101F}',
    aramaic: '\u{1085B}'
  },
  {
    malayalam: '\u{0D22}',
    khmer: '\u{178D}',
    vatteluttu: 'DDHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11020}',
    aramaic: '\u{1085C}'
  },
  {
    malayalam: '\u{0D23}',
    khmer: '\u{178E}',
    vatteluttu: 'NNA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11021}',
    aramaic: '\u{1085D}'
  },
  {
    malayalam: '\u{0D24}',
    khmer: '\u{178F}',
    vatteluttu: 'TA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11022}',
    aramaic: '\u{1085E}'
  },
  {
    malayalam: '\u{0D25}',
    khmer: '\u{1790}',
    vatteluttu: 'THA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11023}',
    aramaic: '\u{1085F}'
  },
  {
    malayalam: '\u{0D26}',
    khmer: '\u{1791}',
    vatteluttu: 'DA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11024}',
    aramaic: '\u{10855}'
  },
  {
    malayalam: '\u{0D27}',
    khmer: '\u{1792}',
    vatteluttu: 'DHA',
    tamil_brahmi: '\u{11405}',
    brahmi: '\u{11025}',
    aramaic: '\u{10855}'
  },
  {malayalam: '\u{0D28}', khmer: '\u{1793}', vatteluttu: 'NA', tamil_brahmi: '\u{11405}', brahmi: '\u{11026}', aramaic: 'Na'},
  {malayalam: '\u{0D2A}', khmer: '\u{1794}', vatteluttu: 'PA', tamil_brahmi: '\u{11405}', brahmi: '\u{11027}', aramaic: 'aa'},
  {malayalam: '\u{0D2B}', khmer: '\u{1795}', vatteluttu: 'PHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11028}', aramaic: 'aa'},
  {malayalam: '\u{0D2C}', khmer: '\u{1796}', vatteluttu: 'BA', tamil_brahmi: '\u{11405}', brahmi: '\u{11029}', aramaic: 'aa'},
  {malayalam: '\u{0D2D}', khmer: '\u{1797}', vatteluttu: 'BHA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102A}', aramaic: 'aa'},
  {malayalam: '\u{0D2E}', khmer: '\u{1798}', vatteluttu: 'MA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102B}', aramaic: 'Ma'},
  {malayalam: '\u{0D2F}', khmer: '\u{1799}', vatteluttu: 'YA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102C}', aramaic: 'Ya'},
  {malayalam: '\u{0D30}', khmer: '\u{179A}', vatteluttu: 'RA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102D}', aramaic: 'Ra'},
  {malayalam: '\u{0D31}', khmer: '\u{179B}', vatteluttu: 'RRA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Rra'},
  {malayalam: '\u{0D32}', khmer: '\u{179C}', vatteluttu: 'LA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102E}', aramaic: 'La'},
  {malayalam: '\u{0D33}', khmer: '\u{179D}', vatteluttu: 'LLA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Va'},
  {malayalam: '\u{0D34}', khmer: '\u{179E}', vatteluttu: 'LLLA', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: ''},
  {malayalam: '\u{0D35}', khmer: '\u{179F}', vatteluttu: 'FA', tamil_brahmi: '\u{11405}', brahmi: '\u{1102F}', aramaic: 'Va'},
  {malayalam: '\u{0D36}', khmer: '', vatteluttu: 'SHA', tamil_brahmi: '\u{11405}', brahmi: '\u{11031}', aramaic: 'Ssa'},
  {malayalam: '\u{0D37}', khmer: '', vatteluttu: 'SSA', tamil_brahmi: '\u{11405}', brahmi: '\u{11030}', aramaic: 'Sha'},
  {malayalam: '\u{0D38}', khmer: '', vatteluttu: 'SA', tamil_brahmi: '\u{11405}', brahmi: '\u{11032}', aramaic: 'Sa'},
  {malayalam: '\u{0D39}', khmer: '', vatteluttu: 'HA', tamil_brahmi: '\u{11405}', brahmi: '\u{11033}', aramaic: 'Ha'},
  {malayalam: '', khmer: '', vatteluttu: '', tamil_brahmi: '\u{11405}', brahmi: '\u{11034}', aramaic: 'Lla'},
  {malayalam: '', khmer: '', vatteluttu: '59', tamil_brahmi: '\u{11405}', brahmi: '\u{11035}', aramaic: 'Llla'},
  {malayalam: '', khmer: '', vatteluttu: '60', tamil_brahmi: '\u{11405}', brahmi: '\u{11036}', aramaic: 'Rra'},
  {malayalam: '', khmer: '', vatteluttu: '61', tamil_brahmi: '\u{11405}', brahmi: '\u{11037}', aramaic: 'Nnna'},

  {malayalam: 'Rr', khmer: '', vatteluttu: '8', tamil_brahmi: '\u{11405}', brahmi: '\u{1100C}', aramaic: 'aa'},
  {malayalam: 'L', khmer: '', vatteluttu: '9', tamil_brahmi: '\u{11405}', brahmi: '\u{1100D}', aramaic: 'aa'},
  {malayalam: 'Ll', khmer: '', vatteluttu: '10', tamil_brahmi: '\u{11405}', brahmi: '\u{1100E}', aramaic: 'aa'},


];

@Component({
  selector: 'app-language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.css']
})
export class LanguageTableComponent {
  displayedColumns: string[] = ['malayalam', 'khmer', 'vatteluttu', 'brahmi', 'aramaic'];
  dataSource = ELEMENT_DATA;
}
