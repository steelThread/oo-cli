export interface ManifestDefinition {
  namespaces: {
    [namespace: string]: ManifestDefinition;
  };
  commands: CommandDefinition[];
}

export interface CommandDefinition {
  path: string;
  className: string;
  command: string;
  aliases: string[];
  help: string;
  documentation: string;
  flags: FlagDefinition[];
  options: OptionDefinition[];
  params: ParamDefinition[];
}

export interface FlagDefinition {
  name: string;
  aliases: string[];
  invertedAliases: string[];
  help: string;
  defaultValue?: boolean;
  invertable: boolean;
}

export interface OptionDefinition {
  name: string;
  aliases: string[];
  help: string;
  defaultValue?: string;
  optional: boolean;
  multiple: boolean;
}

export interface ParamDefinition {
  name: string;
  help: string;
  defaultValue?: string;
  optional: boolean;
  multiple: boolean;
}
