
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type LanguageCode = 'en' | 'fil' | 'il' | 'cb';

export interface Language {
  code: LanguageCode;
  name: string;
  native: string;
}

export interface GlobalCodexFootprint {
  nodeId: string;
  source: string; 
  density: number; 
  integrity: string; 
}

export interface TransparencyAudit {
  auditStatus: 'Clean' | 'Qualified' | 'Pending';
  lastCOAVisit: string;
  transparencyScore: number; 
  fundUtilization: string;
}

export interface SystemSecurity {
  firewallStatus: 'Shielded' | 'Compromised' | 'Bypassing';
  defenderMode: boolean;
  threatLevel: 'Zero' | 'Low' | 'Elevated';
  lastAttackBlocked: string;
}

export interface BidOpportunity {
  id: string;
  title: string;
  agency: string;
  region: string;
  abc: number; 
  location: string;
  category: string;
  deadline: string;
  refNumber: string;
  description: string;
  status: 'Active' | 'Closed' | 'Awarded';
  integrityRating: number; 
  transparencyAudit?: TransparencyAudit;
  multimodalSpecs?: {
    blueprintUrl?: string;
    sitePhotoUrl?: string;
    documentSnippet?: string;
  };
}

export interface AgencyConnection {
  id: string;
  name: string;
  acronym: string;
  region?: string;
  status: 'online' | 'latency' | 'offline' | 'absorbing' | 'auditing';
  lastSync: string;
  loadFactor: number; 
  codexFootprint?: GlobalCodexFootprint;
}

export interface FilterState {
  category: string | 'All';
  budgetRange: string | 'All';
  search: string;
  gender?: string;
  pitch?: string;
}

export interface Attachment {
  mimeType: string;
  data: string; 
  url: string;
}

export interface AiBidAnalysis {
  opportunityId?: string;
  summary: string;
  eligibilityRequirements: string[];
  keyDeadlines: string[];
  swornDeclarationCheck: string;
  technicalSpecs: string;
  legalBasis: string; 
  multidimensionalInsights: string;
  universalCodexMerge: string;
  auditTrail: string; 
  analyticsScore: number; 
  developerCredit: string;
}

export interface MultilingualBriefing {
  agencyName: string;
  brief: string;
  mission: string;
  status: string;
  translationNote: string;
}

export interface Voice {
  name: string;
  pitch: string;
  audioSampleUrl: string;
  analysis: {
    gender: string;
    pitch: string;
    characteristics: string[];
  };
}

export interface AiRecommendation {
  voiceNames: string[];
  systemInstruction: string;
  sampleText: string;
}
