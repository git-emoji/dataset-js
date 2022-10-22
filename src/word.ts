export type WordTag = 'verb' | 'acronym';
const [VERB, ACRONYM] = ['verb', 'acronym'];

export type WordEntry = { cover: string[]; tag: WordTag[]; };
export type Word = { [key: string]: WordEntry };

export const word = {
    abort: { cover: [], tag: [VERB] },
    access: { cover: [], tag: [VERB] },
    acl: { cover: [], tag: [ACRONYM] },
    action: { cover: [], tag: [] },
    addin: { cover: ['add-in', 'add in',], tag: [] },
    add: { cover: [], tag: [VERB] },
    address: { cover: [], tag: [] },
    align: { cover: [], tag: [VERB] },
    antivirus: { cover: ['anti-virus', 'anti virus',], tag: [] },
    append: { cover: [], tag: [VERB] },
    apply: { cover: ['applied',], tag: [VERB] },
    archive: { cover: ['archiving',], tag: [VERB] },
    area: { cover: [], tag: [] },
    argument: { cover: [], tag: [] },
    arrange: { cover: ['arranging',], tag: [VERB] },
    array: { cover: [], tag: [] },
    ask: { cover: [], tag: [VERB] },
    assess: { cover: [], tag: [VERB] },
    attach: { cover: [], tag: [VERB] },
    attempt: { cover: [], tag: [VERB] },
    authenticate: { cover: ['authenticating', 'authentication',], tag: [VERB] },
    authorize: { cover: ['authorizing', 'authorization',], tag: [VERB] },
    avoid: { cover: [], tag: [VERB] },
    await: { cover: [], tag: [VERB] },
    away: { cover: [], tag: [] },
    base: { cover: [], tag: [] },
    beautiful: { cover: [], tag: [] },
    beauty: { cover: [], tag: [] },
    begin: { cover: ['began', 'begun',], tag: [VERB] },
    behave: { cover: ['behaving',], tag: [VERB] },
    behavior: { cover: ['behaviour',], tag: [] },
    beware: { cover: ['bewaring',], tag: [] },
    block: { cover: [], tag: [VERB] },
    body: { cover: [], tag: [] },
    bogus: { cover: [], tag: [] },
    boot: { cover: [], tag: [VERB] },
    bound: { cover: [], tag: [VERB] },
    box: { cover: [], tag: [] },
    breach: { cover: [], tag: [VERB] },
    browse: { cover: ['browsing',], tag: [VERB] },
    buffer: { cover: [], tag: [VERB] },
    bug: { cover: [], tag: [] },
    bugfix: { cover: [], tag: [] },
    bump: { cover: [], tag: [VERB] },
    callback: { cover: ['call-back', 'call back',], tag: [] },
    cancel: { cover: [], tag: [VERB] },
    canvas: { cover: [], tag: [] },
    caution: { cover: [], tag: [] },
    ceiling: { cover: [], tag: [] },
    center: { cover: ['centre',], tag: [] },
    change: { cover: ['changing',], tag: [VERB] },
    check: { cover: [], tag: [VERB] },
    clean: { cover: [], tag: [VERB] },
    close: { cover: ['closing',], tag: [VERB] },
    clutter: { cover: [], tag: [VERB] },
    code: { cover: ['coding',], tag: [] },
    combine: { cover: ['combining', 'combination',], tag: [VERB] },
    comment: { cover: [], tag: [VERB] },
    commit: { cover: [], tag: [VERB] },
    component: { cover: [], tag: [] },
    compromise: { cover: ['compromising',], tag: [VERB] },
    conceal: { cover: [], tag: [VERB] },
    config: { cover: [], tag: [] },
    confirm: { cover: [], tag: [VERB] },
    constrain: { cover: [], tag: [VERB] },
    construct: { cover: [], tag: [VERB] },
    consume: { cover: ['consuming', 'consumption',], tag: [VERB] },
    contain: { cover: [], tag: [VERB] },
    container: { cover: [], tag: [] },
    content: { cover: [], tag: [] },
    convolve: { cover: ['convolving',], tag: [VERB] },
    core: { cover: [], tag: [] },
    correct: { cover: [], tag: [] },
    cosmetics: { cover: [], tag: [] },
    cover: { cover: [], tag: [VERB] },
    crash: { cover: [], tag: [] },
    cron: { cover: [], tag: [] },
    css: { cover: [], tag: [ACRONYM] },
    danger: { cover: [], tag: [] },
    data: { cover: [], tag: [] },
    deadlock: { cover: ['dead-lock', 'dead lock',], tag: [] },
    dealer: { cover: [], tag: [] },
    decode: { cover: ['decoding',], tag: [VERB] },
    decrypt: { cover: [], tag: [VERB] },
    delete: { cover: ['deleting', 'deletion',], tag: [VERB] },
    demonstrate: { cover: ['demonstrating', 'demonstration',], tag: [VERB] },
    dependency: { cover: ['dependencies',], tag: [] },
    dependent: { cover: [], tag: [] },
    deploy: { cover: [], tag: [VERB] },
    deprecate: { cover: ['deprecating', 'deprecation',], tag: [VERB] },
    deserialize: { cover: ['deserializing', 'deserialization',], tag: [VERB] },
    destruct: { cover: [], tag: [VERB] },
    detail: { cover: [], tag: [] },
    direct: { cover: [], tag: [] },
    disable: { cover: ['disabling',], tag: [VERB] },
    display: { cover: [], tag: [] },
    dispose: { cover: ['disposing', 'disposition',], tag: [VERB] },
    distill: { cover: [], tag: [VERB] },
    do: { cover: [], tag: [VERB] },
    downgrade: { cover: ['downgrading', 'downgradation',], tag: [VERB] },
    draft: { cover: [], tag: [] },
    draw: { cover: ['drew',], tag: [VERB] },
    drive: { cover: ['driving', 'drove',], tag: [VERB] },
    drop: { cover: [], tag: [VERB] },
    edge: { cover: [], tag: [] },
    element: { cover: [], tag: [] },
    embellish: { cover: [], tag: [VERB] },
    emulate: { cover: ['emulating', 'emulation',], tag: [VERB] },
    enable: { cover: ['enabling',], tag: [VERB] },
    encrypt: { cover: [], tag: [VERB] },
    end: { cover: [], tag: [VERB] },
    enhance: { cover: ['enhancing'], tag: [VERB] },
    enumerate: { cover: ['enumerating', 'enumeration',], tag: [VERB] },
    erroneous: { cover: [], tag: [] },
    error: { cover: [], tag: [] },
    establish: { cover: [], tag: [VERB] },
    exam: { cover: [], tag: [] },
    exception: { cover: [], tag: [] },
    exclude: { cover: ['excluding', 'exclusion',], tag: [VERB] },
    execute: { cover: ['executing', 'execution',], tag: [VERB] },
    face: { cover: ['facial',], tag: [] },
    fake: { cover: ['faking',], tag: [] },
    feature: { cover: ['featuring',], tag: [] },
    fetch: { cover: [], tag: [VERB] },
    field: { cover: [], tag: [] },
    find: { cover: ['found',], tag: [VERB] },
    fix: { cover: [], tag: [VERB] },
    fixture: { cover: ['fixturing',], tag: [] },
    floor: { cover: [], tag: [] },
    for: { cover: [], tag: [] },
    forget: { cover: ['forgot',], tag: [VERB] },
    format: { cover: [], tag: [VERB] },
    free: { cover: [], tag: [] },
    fresh: { cover: [], tag: [] },
    frontend: { cover: ['front-end', 'front end',], tag: [] },
    function: { cover: [], tag: [VERB] },
    give: { cover: ['gave', 'giving',], tag: [VERB] },
    good: { cover: [], tag: [] },
    graph: { cover: [], tag: [] },
    ground: { cover: [], tag: [] },
    guard: { cover: [], tag: [VERB] },
    guide: { cover: ['guiding',], tag: [VERB] },
    hack: { cover: [], tag: [VERB] },
    handshake: { cover: ['handshaking',], tag: [VERB] },
    hash: { cover: [], tag: [VERB] },
    hazard: { cover: [], tag: [] },
    heart: { cover: [], tag: [] },
    hide: { cover: ['hiding', 'hidden', 'hid',], tag: [VERB] },
    hinder: { cover: [], tag: [VERB] },
    hold: { cover: ['held',], tag: [VERB] },
    holdup: { cover: ['hold-up', 'hold up',], tag: [] },
    hole: { cover: [], tag: [] },
    home: { cover: [], tag: [] },
    html: { cover: [], tag: [ACRONYM] },
    human: { cover: [], tag: [] },
    identifier: { cover: [], tag: [] },
    ignore: { cover: ['ignoring',], tag: [VERB] },
    illustrate: { cover: ['illustrating', 'illustration',], tag: [VERB] },
    image: { cover: ['imaging',], tag: [] },
    impersonate: { cover: ['impersonating', 'impersonation',], tag: [VERB] },
    implement: { cover: [], tag: [VERB] },
    improve: { cover: ['improving',], tag: [VERB] },
    improvise: { cover: ['improvising', 'improvision',], tag: [VERB] },
    incorrect: { cover: [], tag: [] },
    increase: { cover: ['increasing',], tag: [VERB] },
    increment: { cover: [], tag: [VERB] },
    info: { cover: [], tag: [] },
    init: { cover: [], tag: [VERB] },
    initialize: { cover: ['initializing', 'initialization',], tag: [VERB] },
    inquiry: { cover: [], tag: [VERB] },
    insert: { cover: [], tag: [VERB] },
    install: { cover: [], tag: [VERB] },
    intermediate: { cover: ['intermediating', 'intermediation',], tag: [] },
    interrupt: { cover: [], tag: [VERB] },
    item: { cover: [], tag: [] },
    iterate: { cover: ['iterating', 'iteration',], tag: [VERB] },
    job: { cover: [], tag: [] },
    jump: { cover: [], tag: [VERB] },
    keep: { cover: ['kept',], tag: [VERB] },
    key: { cover: [], tag: [] },
    kill: { cover: [], tag: [VERB] },
    launch: { cover: [], tag: [VERB] },
    layer: { cover: [], tag: [] },
    leaf: { cover: ['leaves',], tag: [] },
    library: { cover: [], tag: [] },
    limit: { cover: [], tag: [VERB] },
    line: { cover: [], tag: [] },
    lint: { cover: [], tag: [VERB] },
    list: { cover: [], tag: [VERB] },
    listen: { cover: [], tag: [VERB] },
    load: { cover: [], tag: [VERB] },
    location: { cover: [], tag: [] },
    lock: { cover: [], tag: [VERB] },
    log: { cover: [], tag: [VERB] },
    lookout: { cover: ['look-out', 'look out',], tag: [] },
    lookup: { cover: ['look-up', 'look up',], tag: [VERB] },
    loop: { cover: [], tag: [] },
    loopback: { cover: ['loop-back', 'loop back',], tag: [] },
    manual: { cover: [], tag: [] },
    memory: { cover: ['memorize', 'memorization',], tag: [] },
    merge: { cover: ['merging',], tag: [VERB] },
    method: { cover: [], tag: [] },
    middle: { cover: ['middling',], tag: [] },
    middleman: { cover: ['middle-man', 'middle man',], tag: [] },
    middleware: { cover: ['middle-ware', 'middle ware',], tag: [] },
    mix: { cover: [], tag: [VERB] },
    mock: { cover: [], tag: [VERB] },
    module: { cover: ['modular', 'modulation',], tag: [] },
    move: { cover: ['moving',], tag: [VERB] },
    neglect: { cover: [], tag: [VERB] },
    net: { cover: [], tag: [] },
    network: { cover: [], tag: [] },
    new: { cover: [], tag: [] },
    note: { cover: ['noting', 'notation',], tag: [VERB] },
    notice: { cover: ['noticing',], tag: [VERB] },
    object: { cover: [], tag: [] },
    off: { cover: [], tag: [] },
    on: { cover: [], tag: [] },
    open: { cover: [], tag: [VERB] },
    operator: { cover: [], tag: [] },
    operation: { cover: [], tag: [] },
    order: { cover: [], tag: [VERB] },
    organize: { cover: ['organizing', 'organization',], tag: [VERB] },
    origin: { cover: [], tag: [] },
    out: { cover: [], tag: [] },
    overlook: { cover: ['over-look', 'over look',], tag: [VERB] },
    package: { cover: ['packaging',], tag: [VERB] },
    paint: { cover: [], tag: [VERB] },
    parameter: { cover: [], tag: [] },
    patch: { cover: [], tag: [VERB] },
    path: { cover: [], tag: [] },
    pause: { cover: ['pausing',], tag: [VERB] },
    pend: { cover: [], tag: [VERB] },
    penetrate: { cover: ['penetrating', 'penetration',], tag: [VERB] },
    period: { cover: [], tag: [] },
    persist: { cover: [], tag: [VERB] },
    picture: { cover: [], tag: [] },
    play: { cover: [], tag: [VERB] },
    plug: { cover: [], tag: [VERB] },
    plugin: { cover: ['plug-in', 'plug in',], tag: [] },
    postfix: { cover: [], tag: [] },
    prefix: { cover: [], tag: [] },
    prepend: { cover: [], tag: [VERB] },
    prevent: { cover: [], tag: [VERB] },
    print: { cover: [], tag: [VERB] },
    produce: { cover: ['producing', 'production',], tag: [VERB] },
    property: { cover: ['properties',], tag: [] },
    protect: { cover: [], tag: [VERB] },
    publish: { cover: [], tag: [VERB] },
    put: { cover: [], tag: [VERB] },
    query: { cover: [], tag: [VERB] },
    range: { cover: ['ranging',], tag: [] },
    read: { cover: [], tag: [VERB] },
    readability: { cover: [], tag: [] },
    readable: { cover: [], tag: [] },
    readme: { cover: ['read-me', 'read me',], tag: [] },
    reattempt: { cover: ['re-attempt',], tag: [VERB] },
    reboot: { cover: ['re-boot',], tag: [VERB] },
    receive: { cover: ['receiving',], tag: [VERB] },
    reconstruct: { cover: [], tag: [VERB] },
    record: { cover: [], tag: [VERB] },
    recycle: { cover: ['recycling',], tag: [VERB] },
    redirect: { cover: [], tag: [VERB] },
    reestablish: { cover: ['re-establish', 'restablish', 're-stablish',], tag: [VERB] },
    refactor: { cover: ['re-factor',], tag: [VERB] },
    reference: { cover: ['referencing',], tag: [VERB] },
    refresh: { cover: [], tag: [VERB] },
    register: { cover: [], tag: [VERB] },
    reimplement: { cover: ['re-implement',], tag: [VERB] },
    release: { cover: ['releasing',], tag: [VERB] },
    remove: { cover: ['removing', 'removal',], tag: [VERB] },
    reorder: { cover: [], tag: [VERB] },
    repeat: { cover: [], tag: [VERB] },
    repetitive: { cover: ['repetition',], tag: [] },
    repopulate: { cover: ['repopulating', 'repopulation',], tag: [VERB] },
    request: { cover: [], tag: [VERB] },
    rerun: { cover: ['re-run',], tag: [VERB] },
    reset: { cover: [], tag: [VERB] },
    resolve: { cover: ['resolving',], tag: [VERB] },
    restart: { cover: ['re-start',], tag: [VERB] },
    restrain: { cover: [], tag: [VERB] },
    restrict: { cover: [], tag: [VERB] },
    rethink: { cover: [], tag: [VERB] },
    retro: { cover: [], tag: [] },
    retrospect: { cover: [], tag: [] },
    retry: { cover: ['retried',], tag: [VERB] },
    reveal: { cover: [], tag: [VERB] },
    revert: { cover: [], tag: [VERB] },
    review: { cover: [], tag: [VERB] },
    rewrite: { cover: ['rewriting',], tag: [VERB] },
    rollback: { cover: ['roll-back', 'roll back',], tag: [VERB] },
    root: { cover: [], tag: [] },
    route: { cover: ['routing',], tag: [VERB] },
    run: { cover: ['ran',], tag: [VERB] },
    safe: { cover: [], tag: [] },
    save: { cover: ['saving',], tag: [VERB] },
    schedule: { cover: ['scheduling',], tag: [VERB] },
    scramble: { cover: ['scrambling',], tag: [VERB] },
    search: { cover: [], tag: [VERB] },
    secret: { cover: [], tag: [] },
    secure: { cover: ['securing',], tag: [VERB] },
    security: { cover: [], tag: [] },
    select: { cover: [], tag: [VERB] },
    send: { cover: ['sent',], tag: [VERB] },
    serialize: { cover: ['serializing', 'serialization',], tag: [VERB] },
    set: { cover: [], tag: [VERB] },
    setup: { cover: ['set-up',], tag: [VERB] },
    shadow: { cover: [], tag: [] },
    shell: { cover: [], tag: [] },
    shield: { cover: [], tag: [] },
    show: { cover: [], tag: [VERB] },
    sign: { cover: [], tag: [] },
    silence: { cover: ['silencing',], tag: [VERB] },
    silent: { cover: [], tag: [] },
    simulate: { cover: ['simulating', 'simulation',], tag: [VERB] },
    skip: { cover: [], tag: [VERB] },
    sort: { cover: [], tag: [VERB] },
    spy: { cover: ['spies',], tag: [] },
    stack: { cover: [], tag: [VERB] },
    standby: { cover: ['stand-by',], tag: [VERB] },
    start: { cover: [], tag: [VERB] },
    stop: { cover: [], tag: [VERB] },
    store: { cover: ['storing', 'storage',], tag: [VERB] },
    structure: { cover: ['strucutring', 'structural',], tag: [VERB] },
    stub: { cover: [], tag: [] },
    style: { cover: ['styling',], tag: [] },
    subscribe: { cover: ['subscribing',], tag: [VERB] },
    suffix: { cover: [], tag: [] },
    supervise: { cover: ['supervising', 'supervision',], tag: [VERB] },
    support: { cover: [], tag: [VERB] },
    suppress: { cover: [], tag: [VERB] },
    suspend: { cover: ['suspension',], tag: [VERB] },
    switch: { cover: [], tag: [VERB] },
    take: { cover: ['took', 'taking',], tag: [VERB] },
    temporary: { cover: ['temp',], tag: [] },
    test: { cover: [], tag: [VERB] },
    text: { cover: [], tag: [] },
    threshold: { cover: [], tag: [] },
    time: { cover: ['timing',], tag: [VERB] },
    transform: { cover: [], tag: [VERB] },
    trash: { cover: [], tag: [] },
    tree: { cover: [], tag: [] },
    trespass: { cover: [], tag: [VERB] },
    try: { cover: ['tried', 'trial',], tag: [VERB] },
    ui: { cover: ['user-interface', 'user interface',], tag: [ACRONYM] },
    uncover: { cover: ['un-cover',], tag: [VERB] },
    undo: { cover: [], tag: [VERB] },
    unfollow: { cover: ['un-follow',], tag: [VERB] },
    unify: { cover: ['unification',], tag: [VERB] },
    unit: { cover: [], tag: [] },
    unite: { cover: ['uniting',], tag: [VERB] },
    unleash: { cover: [], tag: [VERB] },
    unscramble: { cover: ['unscrambling',], tag: [VERB] },
    unveil: { cover: [], tag: [VERB] },
    update: { cover: ['updating',], tag: [VERB] },
    upgrade: { cover: ['upgrading',], tag: [VERB] },
    uri: { cover: [], tag: [ACRONYM] },
    url: { cover: [], tag: [ACRONYM] },
    user: { cover: [], tag: [] },
    ux: { cover: ['user-experience', 'user experience',], tag: [ACRONYM] },
    variable: { cover: [], tag: [] },
    version: { cover: [], tag: [] },
    view: { cover: [], tag: [VERB] },
    visible: { cover: [], tag: [] },
    visibility: { cover: ['visibilities',], tag: [] },
    vulnerability: { cover: ['vulnerabilities',], tag: [] },
    wait: { cover: [], tag: [VERB] },
    warn: { cover: ['warning',], tag: [VERB] },
    while: { cover: ['whilst',], tag: [] },
    wip: { cover: ['work-in-progress', 'work in progress',], tag: [ACRONYM] },
    wrap: { cover: [], tag: [VERB] },
    write: { cover: ['writing',], tag: [VERB] },
    wrong: { cover: [], tag: [] },
};

// Make sure of type safety. 
word as Word;