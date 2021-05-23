using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Dutch2Be.Common.Extensions
{
    public static class AppDomainExtensions
    {
        public static IEnumerable<Assembly> GetAssembliesStartWith(this AppDomain appDomain, string startWith)
        {
            return appDomain.GetAssemblies().Where(a => a.GetName().Name.StartsWith(startWith));
        }
    }
}