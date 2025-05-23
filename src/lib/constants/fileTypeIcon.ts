import {
  faFileExcel,
  faFileLines,
  faFilePowerpoint,
  faFileWord,
} from '@fortawesome/free-regular-svg-icons';

export const FileTypeIcon = {
  pdf: { icon: faFileLines, textColor: 'text-red-600', backgroundColor: 'bg-red-50' },
  doc: { icon: faFileWord, textColor: 'text-blue-600', backgroundColor: 'bg-blue-50' },
  docx: { icon: faFileWord, textColor: 'text-blue-600', backgroundColor: 'bg-blue-50' },
  xls: { icon: faFileExcel, textColor: 'text-green-600', backgroundColor: 'bg-green-50' },
  xlsx: { icon: faFileExcel, textColor: 'text-green-600', backgroundColor: 'bg-green-50' },
  ppt: { icon: faFilePowerpoint, textColor: 'text-orange-600', backgroundColor: 'bg-orange-50' },
  pptx: { icon: faFilePowerpoint, textColor: 'text-orange-600', backgroundColor: 'bg-red-50' },
};
