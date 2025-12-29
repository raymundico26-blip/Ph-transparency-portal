
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { BidOpportunity, AgencyConnection, Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'fil', name: 'Filipino', native: 'Tagalog' },
  { code: 'il', name: 'Ilocano', native: 'Ilokano' },
  { code: 'cb', name: 'Cebuano', native: 'Bisaya' }
];

export const AGENCIES: AgencyConnection[] = [
  { id: 'sss', name: 'Social Security System', acronym: 'SSS', status: 'online', lastSync: 'Real-time', loadFactor: 0.98 },
  { id: 'philhealth', name: 'Philippine Health Insurance', acronym: 'PHLH', status: 'online', lastSync: '2s ago', loadFactor: 0.85 },
  { id: 'gsis', name: 'Govt Service Insurance System', acronym: 'GSIS', status: 'online', lastSync: '5s ago', loadFactor: 0.91 },
  { id: 'pagibig', name: 'Pag-IBIG Fund', acronym: 'PAGIBIG', status: 'online', lastSync: '1s ago', loadFactor: 0.88 },
  { id: 'tesda', name: 'TESDA Skills Dev Authority', acronym: 'TESDA', status: 'online', lastSync: '10s ago', loadFactor: 0.45 },
  { id: 'coa', name: 'Commission on Audit', acronym: 'COA', status: 'auditing', lastSync: 'Live', loadFactor: 0.95 },
  { id: 'egov', name: 'e.gov.ph Unified Portal', acronym: 'eGOV', status: 'online', lastSync: '1s ago', loadFactor: 0.99 },
  { id: 'dmw', name: 'Dept of Migrant Workers', acronym: 'DMW', status: 'absorbing', lastSync: 'Syncing', loadFactor: 0.72 },
  { id: 'bi', name: 'Bureau of Immigration', acronym: 'BI', status: 'online', lastSync: '12s ago', loadFactor: 0.65 },
  { id: 'da', name: 'Department of Agriculture', acronym: 'DA', status: 'online', lastSync: '10s ago', loadFactor: 0.15 },
  { id: 'dof', name: 'Department of Finance', acronym: 'DOF', status: 'online', lastSync: '1s ago', loadFactor: 0.92 },
  { id: 'dpwh', name: 'Dept of Public Works & Highways', acronym: 'DPWH', status: 'absorbing', lastSync: '5s ago', loadFactor: 0.78 },
  { id: 'dict', name: 'Dept of Information Tech', acronym: 'DICT', status: 'online', lastSync: '1m ago', loadFactor: 0.45 },
  { id: 'bir', name: 'Bureau of Internal Revenue', acronym: 'BIR', status: 'online', lastSync: '10m ago', loadFactor: 0.34 },
];

export const BID_DATA: BidOpportunity[] = [
  {
    id: "PH-DEF-001",
    title: "Supreme Multicast Infrastructure",
    agency: "DICT / Google Data Center",
    region: "NCR",
    abc: 500000000.00,
    location: "Quezon City / Vertex Hub",
    category: "Cybersecurity",
    deadline: "2026-06-30",
    refNumber: "DEF-2026-SUPREME",
    description: "Multi-agency cloud firewall deployment protecting PH Agency datasets via Direct Injection multicast tunneling.",
    status: "Active",
    integrityRating: 100,
    transparencyAudit: {
      auditStatus: 'Clean',
      lastCOAVisit: '2025-12-01',
      transparencyScore: 99.9,
      fundUtilization: 'Secured'
    }
  },
  {
    id: "PH-TRANS-001",
    title: "National HQ Multimodal Hub",
    agency: "DMW / OWWA Joint Command",
    region: "NCR",
    abc: 185000000.00,
    location: "National Headquarters, Mandaluyong",
    category: "Infrastructure",
    deadline: "2026-04-15",
    refNumber: "DMW-HUB-2026-01",
    description: "Multilingual hub for migrant support. Integrated with e.gov.ph and BI database nodes using Gemini Flash Blink rendering.",
    status: "Active",
    integrityRating: 99.8
  }
];

export const DEVELOPER_INFO = {
  name: "Raymund De Vera Ico",
  role: "Google Cloud Developer Certified / Multiverse Architect",
  company: "Jethro A.I Electrical Installation Services",
  address: "Carael Road Zone 2, Dagupan City, Pangasinan, Philippines 2400",
  website: "http://jethroaiservices.com"
};
