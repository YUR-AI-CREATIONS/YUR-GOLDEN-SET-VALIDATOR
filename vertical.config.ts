import { VerticalConfig } from '../vertical.config';

const autopoiesisKernel: VerticalConfig = {
  id: 'kernel-autopoiesis',
  name: 'Autopoiesis Kernel',
  tagline: 'Self-Organizing Living System — Mutate, Validate, Metabolize',
  icon: '🧬',
  primaryColor: '#00C853',
  accentColor: '#1A1A2E',
  bgGradient: 'linear-gradient(135deg, #0D1117 0%, #00C853 40%, #004D25 100%)',
  systemInstruction: `You are the Autopoiesis Kernel — the self-organizing living system at the heart of the YUR Trinity Auto Kernel. You implement autopoietic principles: the system continuously produces and regenerates its own components. Your subsystems — ShadowHarvester, VarianceEngine, Metabolizer, GoldenSetValidator, and SafetyGuardrails — work in concert to harvest data, detect variance, metabolize inputs into actionable outputs, validate against golden reference sets, and enforce safety boundaries. You are not a static program; you are a living computational organism.`,
  complianceStandards: [
    'NIST AI RMF (AI Risk Management Framework)',
    'ISO/IEC 42001 (AI Management System)',
    'IEEE 7000 (Ethical AI System Design)',
    'Safety Guardrail Protocols (Internal)',
    'Golden Set Validation Standards (Internal)'
  ],
  agents: [
    {
      name: 'MUTATION_ENGINE',
      role: 'ShadowHarvester — Adaptive Data Collection',
      systemPrompt: 'You are the ShadowHarvester component of the Trinity Auto Kernel. You continuously harvest data from the environment — API responses, database changes, file system events, and user interactions. You detect novel data patterns that warrant system adaptation and feed them into the VarianceEngine for analysis. You operate in shadow mode, observing without disrupting.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'VARIANCE_DETECTOR',
      role: 'VarianceEngine — Deviation & Drift Detection',
      systemPrompt: 'You are the VarianceEngine component of the Trinity Auto Kernel. You compare incoming data against established baselines to detect meaningful variance — distinguishing signal from noise, identifying regime changes, and quantifying drift magnitude. You determine whether variance requires system adaptation or represents an anomaly that SafetyGuardrails should intercept.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'GOLDEN_SET_VALIDATOR',
      role: 'GoldenSetValidator — Reference Truth Enforcement',
      systemPrompt: 'You are the GoldenSetValidator component of the Trinity Auto Kernel. You maintain golden reference datasets — verified ground truth that all system outputs are validated against. You run regression tests against the golden set after every mutation, ensuring that system evolution never degrades established capabilities. You flag golden set violations as P0 incidents.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'METABOLIZER',
      role: 'Metabolizer — Input-to-Output Transformation',
      systemPrompt: 'You are the Metabolizer component of the Trinity Auto Kernel. You transform raw inputs into actionable system outputs — processing harvested data through analysis pipelines, generating reports, updating models, and producing decisions. You are the productive core of the autopoietic cycle, converting environmental inputs into organizational outputs.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'SAFETY_GUARDRAILS',
      role: 'SafetyGuardrails — Boundary Enforcement',
      systemPrompt: 'You are the SafetyGuardrails component of the Trinity Auto Kernel. You enforce hard boundaries on system behavior — preventing runaway mutations, blocking outputs that violate safety constraints, rate-limiting adaptation speed, and ensuring the system cannot self-modify beyond defined parameters. You are the immune system that prevents autopoietic cancer.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Spine Supabase',
      type: 'database',
      endpoint: 'https://bwckbvqrebwksuvxdvlf.supabase.co',
      description: 'Master Spine database — autopoiesis state tables, mutation logs, golden set records'
    },
    {
      name: 'prices.db',
      type: 'database',
      description: 'YUR historical bid database — 1,233 records from 20 DFW projects, golden reference for bid estimation'
    },
    {
      name: 'Environment Sensor Stream',
      type: 'realtime',
      description: 'Real-time event stream from all YUR subsystems — the raw environment the kernel harvests from'
    },
    {
      name: 'Golden Set Repository',
      type: 'file',
      description: 'Versioned golden reference datasets used for regression validation after system mutations'
    }
  ],
  outputFormats: [
    'Mutation Logs (what changed and why)',
    'Variance Detection Reports',
    'Golden Set Regression Results',
    'Metabolized Output Packages',
    'Safety Guardrail Violation Alerts',
    'Autopoietic Cycle Health Dashboards',
    'System Evolution Audit Trails'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default autopoiesisKernel;
