type CacheEntry<T> = {
    createdAt: number,
    val: T,
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    };

    add<T> (key: string, value: T): void {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: value,
        };
        this.#cache.set(key, entry);
    };

    get<T> (key: string): T | undefined {
        const entry: CacheEntry<T> | undefined = this.#cache.get(key);
        if (entry === undefined) {
            return undefined;
        } else
            return entry.val as T;
    };

    #reap (): void {
        for (const [key, val] of this.#cache) {
            if (val.createdAt < (Date.now() - this.#interval)) {
                this.#cache.delete(key);
            };
        };
    };

    #startReapLoop () :void {
        this.#reapIntervalID = setInterval (() => {
            this.#reap();
        }, this.#interval);
    }

    stopReapLoop() :void {
        if (this.#reapIntervalID) {
            clearInterval(this.#reapIntervalID);
            this.#reapIntervalID = undefined;
        }
    }
}