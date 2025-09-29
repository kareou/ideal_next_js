"use client";
import React, { useState, useEffect, useCallback } from "react";
import { CalendarDays, TrendingUp, CheckCircle, Clock, XCircle } from "lucide-react";

interface SaleMetric {
  total: number;
  amount?: number;
  percentage?: number;
  statusId?: number;
}

interface SalesData {
  p1Cleared: SaleMetric;
  p1PD: SaleMetric;
  p1Declined: SaleMetric;
  p1Cancelled: SaleMetric;
  p2Cleared: SaleMetric;
  p2PD: SaleMetric;
  p2Declined: SaleMetric;
  p2Cancelled: SaleMetric;
}

interface SalesAgent {
  id: string;
  name: string;
}

const SalesReportDashboard: React.FC = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("all");
  const [salesData, setSalesData] = useState<SalesData | null>(null);

  // const salesAgents: SalesAgent[] = [
  //   { id: "all", name: "All Agents" },
  //   { id: "John Smith", name: "John Smith" },
  //   { id: "Sarah Johnson", name: "Sarah Johnson" },
  //   { id: "Mike Davis", name: "Mike Davis" },
  //   { id: "Emily Brown", name: "Emily Brown" },
  // ];

  const STATUS_MAP = {
    P1: { Cleared: 503, PD: 503, Declined: 503 },
    P2: { Cleared: 543, PD: 543, Declined: 543 },
  };
  
  // const fetchData = useCallback(async () => { 
  //   try {
  //     const query = new URLSearchParams();
  //     if (dateFrom) query.append("from", dateFrom);
  //     if (dateTo) query.append("to", dateTo);
  //     if (selectedAgent !== "all") query.append("agent", selectedAgent);

  //     const res = await fetch(`/api/sales-report?${query.toString()}`);
  //     const data: SalesData = await res.json();

  //     const enrichedData: SalesData = {
  //       p1Cleared: { ...data.p1Cleared, statusId: STATUS_MAP.P1.Cleared },
  //       p1PD: { ...data.p1PD, statusId: STATUS_MAP.P1.PD },
  //       p1Declined: { ...data.p1Declined, statusId: STATUS_MAP.P1.Declined },
  //       p1Cancelled: { ...data.p1Cancelled, statusId: 503 },
  //       p2Cleared: { ...data.p2Cleared, statusId: STATUS_MAP.P2.Cleared },
  //       p2PD: { ...data.p2PD, statusId: STATUS_MAP.P2.PD },
  //       p2Declined: { ...data.p2Declined, statusId: STATUS_MAP.P2.Declined },
  //       p2Cancelled: { ...data.p2Cancelled, statusId: 543 },
  //     };

  //     const calcPercentage = (cleared: number, pd: number, declined: number) =>
  //       cleared + pd + declined > 0 ? Math.round((declined / (cleared + pd + declined)) * 100) : 0;

  //     enrichedData.p1Declined.percentage = calcPercentage(
  //       enrichedData.p1Cleared.total,
  //       enrichedData.p1PD.total,
  //       enrichedData.p1Declined.total
  //     );
  //     enrichedData.p2Declined.percentage = calcPercentage(
  //       enrichedData.p2Cleared.total,
  //       enrichedData.p2PD.total,
  //       enrichedData.p2Declined.total
  //     );

  //     setSalesData(enrichedData);
  //   } catch (err) {
  //     console.error("Error fetching sales data:", err);
  //   }
  // }, [dateFrom, dateTo, selectedAgent]);

  // useEffect(() => {
  //   fetchData(); 
  //   const interval = setInterval(fetchData, 5000); 
  //   return () => clearInterval(interval);
  // }, [fetchData]);



  const [salesAgents, setSalesAgents] = useState<SalesAgent[]>([
  { id: "all", name: "All Agents" },
]);

const fetchData = useCallback(async () => {
  try {
    const query = new URLSearchParams();
    if (dateFrom) query.append("from", dateFrom);
    if (dateTo) query.append("to", dateTo);
    if (selectedAgent !== "all") query.append("agent", selectedAgent);

    const res = await fetch(`/api/sales-report?${query.toString()}`);
    const data: SalesData & { salesAgents: SalesAgent[] } = await res.json();

    // Merge new agents with existing ones to keep all
    setSalesAgents((prev) => {
      const allAgents = [{ id: "all", name: "All Agents" }, ...data.salesAgents];
      const map = new Map<string, SalesAgent>();
      allAgents.forEach((agent) => map.set(agent.id, agent));
      return Array.from(map.values()); // remove duplicates
    });

    // Enrich data as before
    const enrichedData: SalesData = {
      p1Cleared: { ...data.p1Cleared, statusId: STATUS_MAP.P1.Cleared },
      p1PD: { ...data.p1PD, statusId: STATUS_MAP.P1.PD },
      p1Declined: { ...data.p1Declined, statusId: STATUS_MAP.P1.Declined },
      p1Cancelled: { ...data.p1Cancelled, statusId: 503 },
      p2Cleared: { ...data.p2Cleared, statusId: STATUS_MAP.P2.Cleared },
      p2PD: { ...data.p2PD, statusId: STATUS_MAP.P2.PD },
      p2Declined: { ...data.p2Declined, statusId: STATUS_MAP.P2.Declined },
      p2Cancelled: { ...data.p2Cancelled, statusId: 543 },
    };

    const calcPercentage = (cleared: number, pd: number, declined: number) =>
      cleared + pd + declined > 0 ? Math.round((declined / (cleared + pd + declined)) * 100) : 0;

    enrichedData.p1Declined.percentage = calcPercentage(
      enrichedData.p1Cleared.total,
      enrichedData.p1PD.total,
      enrichedData.p1Declined.total
    );
    enrichedData.p2Declined.percentage = calcPercentage(
      enrichedData.p2Cleared.total,
      enrichedData.p2PD.total,
      enrichedData.p2Declined.total
    );

    setSalesData(enrichedData);
  } catch (err) {
    console.error("Error fetching sales data:", err);
  }
}, [dateFrom, dateTo, selectedAgent]);


useEffect(() => {
    fetchData(); 
    const interval = setInterval(fetchData, 5000); 
    return () => clearInterval(interval);
  }, [fetchData]);

  const formatCurrency = (amount: number = 0) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  const MetricCard: React.FC<{
    title: string;
    total: number;
    amount?: number;
    soldTotal?: number;
    soldAmount?: number;
    statusId?: number;
    percentage?: number;
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
    borderColor: string;
  }> = ({
    title,
    total,
    amount,
    soldTotal,
    soldAmount,
    statusId,
    percentage,
    icon,
    bgColor,
    iconColor,
    borderColor,
  }) => {
    return (
      <div
        className={`${bgColor} ${borderColor} rounded-xl border-2 p-6 shadow-sm hover:shadow-lg transition-all duration-200`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className={`p-3 rounded-full bg-white shadow-sm ${iconColor}`}>
            {icon}
          </div>
        </div>
        <div className="space-y-3">
          {soldTotal !== undefined && soldAmount !== undefined ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Sold:
                </span>
                <span className="text-2xl font-bold text-gray-800">
                  {soldTotal}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Revenue:
                </span>
                <span className="text-xl font-semibold text-gray-800">
                  {formatCurrency(soldAmount)}
                </span>
              </div>
              <div className="text-xs text-gray-500 text-center pt-2 border-t">
                ({total} Cleared + {soldTotal - total} PD)
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Total Count:
                </span>
                <span className="text-2xl font-bold text-gray-800">{total}</span>
              </div>
              {amount !== undefined && (
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Total Amount:
                  </span>
                  <span className="text-xl font-semibold text-gray-800">
                    {formatCurrency(amount)}
                  </span>
                </div>
              )}
              {percentage !== undefined && (
                <div className="text-sm text-gray-500">
                  Decline %: {percentage}%
                </div>
              )}
            </>
          )}
          {statusId && (
            <div className="text-sm text-gray-500">Status ID: {statusId}</div>
          )}
        </div>
      </div>
    );
  };

  if (!salesData) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sales Report Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Track your P1 and P2 sales performance metrics
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CalendarDays className="text-blue-600" size={24} />
            Filters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From Date
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To Date
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sales Agent
              </label>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                {salesAgents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            title="P1 Cleared"
            {...salesData.p1Cleared}
            icon={<CheckCircle size={28} />}
            bgColor="bg-green-50"
            iconColor="text-green-600"
            borderColor="border-green-200"
          />
          <MetricCard
            title="P1 PD"
            {...salesData.p1PD}
            icon={<Clock size={28} />}
            bgColor="bg-yellow-50"
            iconColor="text-yellow-600"
            borderColor="border-yellow-200"
          />
          <MetricCard
            title="Total P1 Sold"
            total={salesData.p1Cleared.total}
            soldTotal={
              (salesData.p1Cleared.total || 0) + (salesData.p1PD.total || 0)
            }
            soldAmount={
              (salesData.p1Cleared.amount || 0) + (salesData.p1PD.amount || 0)
            }
            icon={<TrendingUp size={28} />}
            bgColor="bg-blue-50"
            iconColor="text-blue-600"
            borderColor="border-blue-200"
          />
          <MetricCard
            title="P2 Cleared"
            {...salesData.p2Cleared}
            icon={<CheckCircle size={28} />}
            bgColor="bg-green-50"
            iconColor="text-green-600"
            borderColor="border-green-200"
          />
          <MetricCard
            title="P2 PD"
            {...salesData.p2PD}
            icon={<Clock size={28} />}
            bgColor="bg-yellow-50"
            iconColor="text-yellow-600"
            borderColor="border-yellow-200"
          />
          <MetricCard
            title="Total P2 Sold"
            total={salesData.p2Cleared.total}
            soldTotal={
              (salesData.p2Cleared.total || 0) + (salesData.p2PD.total || 0)
            }
            soldAmount={
              (salesData.p2Cleared.amount || 0) + (salesData.p2PD.amount || 0)
            }
            icon={<TrendingUp size={28} />}
            bgColor="bg-purple-50"
            iconColor="text-purple-600"
            borderColor="border-purple-200"
          />
        </div>

        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Declined Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricCard
              title="P1 Declined"
              {...salesData.p1Declined}
              icon={<XCircle size={28} />}
              bgColor="bg-red-50"
              iconColor="text-red-600"
              borderColor="border-red-200"
            />
            <MetricCard
              title="P2 Declined"
              {...salesData.p2Declined}
              icon={<XCircle size={28} />}
              bgColor="bg-red-50"
              iconColor="text-red-600"
              borderColor="border-red-200"
            />
          </div>
        </div> */}


        <div className="mt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Cancelled & Declined Statistics
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* P1 Cancelled */}
    <MetricCard
      title="P1 Cancelled"
      {...salesData.p1Cancelled}
      icon={<XCircle size={28} />}
      bgColor="bg-gray-50"
      iconColor="text-gray-600"
      borderColor="border-gray-200"
    />

    {/* P1 Declined */}
    <MetricCard
      title="P1 Declined"
      {...salesData.p1Declined}
      icon={<XCircle size={28} />}
      bgColor="bg-red-50"
      iconColor="text-red-600"
      borderColor="border-red-200"
    />

    {/* P2 Cancelled */}
    <MetricCard
      title="P2 Cancelled"
      {...salesData.p2Cancelled}
      icon={<XCircle size={28} />}
      bgColor="bg-gray-50"
      iconColor="text-gray-600"
      borderColor="border-gray-200"
    />

    {/* P2 Declined */}
    <MetricCard
      title="P2 Declined"
      {...salesData.p2Declined}
      icon={<XCircle size={28} />}
      bgColor="bg-red-50"
      iconColor="text-red-600"
      borderColor="border-red-200"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default SalesReportDashboard;
