

// RETURNS OBJECT WITH KEY MATCHES VALUE
'array'.reduce((a, v) => ({ ...a, [v]: v}), {})

//RETURNS A KEY AND A COUNT FOR THE NUMBER OF OCCURRANCES
ARRAY || "STRING".split('').reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {})