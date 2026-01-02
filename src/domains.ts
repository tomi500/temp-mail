// List of supported email domains
// noinspection SpellCheckingInspection

export const DOMAINS = [
    {
        owner: "tomi",
        domain: "tm.603060.xyz",
    }
] satisfies {
    owner: string;
    domain: string;
}[];

export const DOMAINS_SET = new Set(DOMAINS.map((d) => d.domain));
