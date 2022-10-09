namespace PartyMaker.Domain.Helpers
{
    public static class TimeProvider
    {
        private static Func<DateTime> defaultProvider = () => DateTime.Now;
        private static Func<DateTime> defaultUtcProvider = () => DateTime.UtcNow;
        private static Func<DateTime> provider;

        public static Func<DateTime> Provider
        {
            set
            {
                TimeProvider.provider = value;
            }
        }

        public static DateTime Now
        {
            get
            {
                if (TimeProvider.provider == null)
                {
                    TimeProvider.provider = TimeProvider.defaultProvider;
                }

                return TimeProvider.provider();
            }
        }

        public static DateTime UtcNow
        {
            get
            {
                if (TimeProvider.provider == null)
                {
                    TimeProvider.provider = TimeProvider.defaultUtcProvider;
                }

                return TimeProvider.provider();
            }
        }
    }
}
